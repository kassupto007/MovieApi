import { useRef, useEffect } from 'react';
import { CancelToken, isCancel } from 'axios';

/**
 * When a component unmounts, we need to cancel any potentially
 * ongoing Axios calls that result in a state update on success / fail.
 * This function sets up the appropriate useEffect to handle the canceling.
 *
 * @returns {createNewToken: function, isCancel: function}
 * createNewToken - used to generate the cancel token sent in the Axios request.
 * isCancel - used to check if error returned in response is a cancel token error.
 */
const useCancelToken = () => {
  const axiosSource = useRef(null);
  const createNewToken = () => {
    axiosSource.current = CancelToken.source();
    return axiosSource.current.token;
  };

  useEffect(
    () => () => {
      if (axiosSource.current) axiosSource.current.cancel();
    },
    []
  );

  return { createNewToken, isCancel };
};
export default useCancelToken;
