import { computed, ref } from "vue";

export const useCounter = (initalValue?: number) => {
  if(initalValue === undefined) initalValue = 3
  const counter = ref(initalValue)

  return {
    counter,
    //read-only
    squareCounter:  computed(()=>counter.value! * counter.value!)
  }
}
