import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: 150,
      width: "70%",
      marginTop: theme.spacing(5)
    }
  })
);
