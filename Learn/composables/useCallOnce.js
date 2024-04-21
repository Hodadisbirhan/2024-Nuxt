export default function useCallOnce() {
  callOnce(() => {
    console.log("It is called once for runing at once");
  });
}
