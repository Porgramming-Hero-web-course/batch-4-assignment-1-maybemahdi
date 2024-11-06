{
  // 4 - Calculate Area of circle or rectangle (type guard)
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (obj: Shape): number => {
    if (obj.shape === "circle") {
      return Number((Math.PI * Math.pow(obj.radius, 2)).toFixed(2)); // circle area
    } else if (obj.shape === "rectangle") {
      return obj.height * obj.width; // rectangle area
    }
    throw new Error("Invalid shape");
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(circleArea);
  console.log(rectangleArea);


  //
}
