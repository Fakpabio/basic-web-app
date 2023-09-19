export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatisst."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "fakpabio"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "Akapojo"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "Akapojo"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largeMatch = (
    query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/))

    if (largeMatch) {
      const x: number = parseInt(largeMatch[1]);
      const y: number = parseInt(largeMatch[2]);
      const z: number = parseInt(largeMatch[3]);
      return (Math.max(x,y,z)).toString();
    }
  
    const squareMatch = (
      query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/))



      if (squareMatch) {
        for (let i = 1;  i < 8; i++){
          const x: number = parseInt(squareMatch[i]);

          if ((Math.sqrt(x) == Math.floor(Math.sqrt(x))) && (Math.cbrt(x) == Math.floor(Math.cbrt(x)))){
            return x.toString();
          }
        }
        return "";
      }

    const mulMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if (mulMatch) {
      const x: number = parseInt(mulMatch[1]);
      const y: number = parseInt(mulMatch[2]);
      return (x*y).toString();
    }

    const powMatch = query.match(/What is (\d+) to the power of (\d+)/);
    if (powMatch) {
      const x: number = parseInt(powMatch[1]);
      const y: number = parseInt(powMatch[2]);
      return Math.pow(x,y).toString();
    }
  return "";

}
