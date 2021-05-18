export default function generateRandomColor(){

  const random = () => {
      const num = Math.floor(Math.random() * (350 - 50) + 50);
      return num > 255 ? 255 : num;
  }
    const R = random();
    const G = random();
    const B = random();
    const color = `rgb(${R}, ${G}, ${B})`;
    return color;
}