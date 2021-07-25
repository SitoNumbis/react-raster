export default function useUndefinedProps(props) {
  const {
    display,
    breakpoints,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    colspan,
    cols,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,

    gap,
    gridRowGap,
    rowGap,
    gridColumnGap,
    columnGap,

    gridTemplateRows,
    gridAutoRows,
    gridTemplateColumns,
    gridRow,
    gridColumn,
    autoFlow,
    component,
    innerHTML,

    cursor,
    pointerEvents,

    onResize,
    onIntersect,
    root,
    rootMargin,
    threshold,

    styles,
    as,
    control,
    controlColor,
    order,
    position,
    zIndex,
    top,
    bottom,
    left,
    right,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    flexDirection,
    flexWrap,
    flexShrink,
    flexGrow,
    background,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundSize,
    backgroundAttachment,

    filter,
    backdropFilter,
    mixBlendMode,
    backgroundBlendMode,
    textShadow,
    boxShadow,
    textStroke,

    border,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    textAlign,
    color,
    lineHeight,
    letterSpacing,
    textDecoration,
    hyphens,

    overflow,
    overflowX,
    overflowY,

    transition,
    animation,
    opacity,
    transform,
    willChange,

    className,
    children,
    isControl,
    ref,
    ...rest
  } = props;
  return rest;
}
