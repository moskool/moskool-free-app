const styles = theme => ({
  link: {
    transition: "transform .35s",
    backgroundColor: theme.palette.primary.main,
    textDecoration: "none",
    padding: "12px 22px",
    color: theme.white?.medium,
    fontSize: "1.1rem",
    borderRadius: "3px",
    textTransform: "initial",
    fontWeight: "600",
    "&:hover": {
      background: theme.grey?.dark
    },
    "&:hover .arrow": {
      transform: "translateX(5px)"
    },
    icon: {
      transition: "transform .35s",
      paddingLeft: "4px",
      paddingTop: "2px"
    }
  }
});

export default styles;
