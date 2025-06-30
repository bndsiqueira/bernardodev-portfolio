export const fadeIn = (direction = "up", delay = 0) => {
  let x = 0;
  let y = 0;

  if (direction === "left") x = 100;
  if (direction === "right") x = -100;
  if (direction === "up") y = 100;
  if (direction === "down") y = -100;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: "easeOut"
      },
    },
  };
};
