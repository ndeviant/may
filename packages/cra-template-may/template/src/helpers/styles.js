import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useIsDesktop = () => {
  return useMediaQuery((theme) => theme.breakpoints.up('md'));
};
