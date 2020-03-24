import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(10),
      width: "100%"
    },
    margin: {
      height: theme.spacing(3)
    }
  })
);
