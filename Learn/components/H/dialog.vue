<template>
  <div
    class="fixed flex justify-center min-h-screen items-center transition-colors duration-300 top-0 left-0 right-0"
    :class="[isLive ? ' bg-black/50  visible' : 'bg-blue-50/100 invisible']">
    <div
      class="md:w-[60%] drop-shadow relative bg-white rounded-md h-[calc(100vh-10rem)] overflow-y-auto">
      <div class="w-full flex justify-end sticky top-0 bg-white px-2 py-1 z-30">
        <button
          class="text-lg font-normal text-red w-6 h-6 border-2 focus:ring-2 focus:ring-offset-2 ring-gray-500 rounded border-gray-500 border-solid flex justify-center items-center hover:bg-gray-500 hover:text-white"
          @click="remove()">
          X
        </button>
      </div>
      <slot
        class="min-h-[20rem]"
        name="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        repudiandae sed iure praesentium facere repellat animi, ipsa asperiores
        veniam ad, laborum culpa nemo. Molestiae nihil eveniet possimus vel
        quidem perferendis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Velit repudiandae sed iure praesentium facere repellat animi, ipsa
        asperiores veniam ad, laborum culpa nemo. Molestiae nihil eveniet
        possimus vel quidem perferendis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Velit repudiandae sed iure praesentium facere repellat
        animi, ipsa asperiores veniam ad, laborum culpa nemo. Molestiae nihil
        eveniet possimus vel quidem perferendis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit repudiandae sed iure praesentium
        facere repellat animi, ipsa asperiores veniam ad, laborum culpa nemo.
        Molestiae nihil eveniet possimus vel quidem perferendis. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Velit repudiandae sed iure
        praesentium facere repellat animi, ipsa asperiores veniam ad, laborum
        culpa nemo. Molestiae nihil eveniet possimus vel quidem perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        repudiandae sed iure praesentium facere repellat animi, ipsa asperiores
        veniam ad, laborum culpa nemo. Molestiae nihil eveniet possimus vel
        quidem perferendis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Velit repudiandae sed iure praesentium facere repellat animi, ipsa
        asperiores veniam ad, laborum culpa nemo. Molestiae nihil eveniet
        possimus vel quidem perferendis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Velit repudiandae sed iure praesentium facere repellat
        animi, ipsa asperiores veniam ad, laborum culpa nemo. Molestiae nihil
        eveniet possimus vel quidem perferendis.</slot
      >
      <div class="border-animation">
        Border Animation
        <div class="border-animation__inner"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["remove-dialog"]);
const props = defineProps({
  isLive: {
    type: Boolean,
  },
});

const isLive = computed(() => {
  return props.isLive;
});

const remove = () => {
  emits("remove-dialog", false);
};
</script>
