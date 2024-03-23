<script setup>
import { useForm, useField } from "vee-validate";
const err = ref(null);
const credentail = ref(null);
const initialValue = ref("");
const dialog = ref(true);
const gender = ref(["male", "female"]);
const { loginWithPasswordAndEmail, google, updateProfile, user, signout } =
  useLogin();

const { createAccountWithEmailAndPassword } = useCreateAccount();
let i = ref(0);
const { handleSubmit } = useForm();

const submit = handleSubmit(async (value) => {
  console.log(value);
  const { result, error } = await createAccountWithEmailAndPassword({
    email: value.email,
    password: value.pass,
  });

  if (!error) {
  }

  credentail.value = result;
  err.value = error;
});

const router = useRouter();

const moveTo = () => {
  router.push({ name: "admin" });
};
const setIntialValue = () => {
  initialValue.value = "hodadis";
};

const withGoogle = async () => {
  const { result, error } = await google();

  if (!error) {
  }

  credentail.value = result;
  err.value = error;
};

const update = async () => {
  try {
    console.log(user);
    updateProfile(user, { displayName: "ababaw Alemu" })
      .then((value) => {
        credentail.value = value;
        console.log(user);
        err.value = null;
      })
      .catch((error) => {
        credentail.value = null;
        err.value = error;
        console.log(error);
      });
  } catch (error) {}
};

definePageMeta({
  middleware: ["gaurd"],
});

const signo = () => {
  signout();
};
</script>

<template>
  <main
    class="text-lg relative justify-center overflow-hidden items-center flex before:content-[''] before:w-[40rem] before:h-[40rem] before:bg-blue-400/60 before:rounded-[100%] before:absolute before:-top-7 before:-left-6 before:-translate-x-60 before:-translate-y-60 after:content-[''] after:w-[40rem] after:h-[40rem] after:bg-blue-900 after:rounded-[100%] after:absolute after:bottom-2 after:-right-6 after:translate-x-60 after:translate-y-60 font-bold before:-z-0 after:-z-2 pb-14 min-h-[100vh]">
    <button @click="signo">signout</button>
    <div
      class="px-3 text-slate-500 w-full min-h-[100vh] font-normal bg-slate-100 py-7">
      <form
        class="w-[20rem] z-10 relative mx-auto shadow-md drop-shadow-md rounded-2xl bg-white before:content-[''] before:absolute before:-top-[13rem] before:-left-[50%] before:w-[40rem] before:h-[20rem] before:rounded-[100%] before:bg-blue-800 shadow-transparent pt-[10rem] flex flex-col overflow-hidden gap-5 px-10 py-10"
        @submit.prevent="submit">
        <h1 class="text-2xl uppercase font-bold text-center text-blue-800">
          Well Come Login
        </h1>
        <p v-if="err">{{ err }}</p>
        <p v-else-if="credentail">{{ credentail }}</p>
        <h-field
          name="email"
          id="loginemail"
          placeholder="email"
          type="email"
          :hasPreIcon="false"
          rule="email|required"
          v-model="initialValue" />

        <h-field
          name="pass"
          id="loginpass"
          placeholder="password"
          type="password"
          postIcon="material-symbols:visibility-rounded"
          rule="password:4,8"
          v-model="initialValue" />
        <!-- <h-group-check-box
          name="gender"
          :values="[
            { name: 'male', id: 'male', value: 'male' },
            { name: 'female', id: 'female', value: 'female' },
          ]"
          rule="required"
          v-model="gender" /> -->
        <div class="flex w-full justify-center">
          <button
            type="submit"
            class="text-sm font-semibold w-full text-white mt-5 bg-blue-800 px-8 hover:bg-blue-900 focus:ring-2 ring-offset-2 ring-blue-800 py-3 rounded-md">
            Sign In
          </button>
        </div>
        <button
          type="button"
          @click="withGoogle">
          <Icon name="uil:google">Google</Icon>
        </button>
        <button
          type="button"
          @click="update">
          Update
        </button>
        <NuxtLink
          :to="{ path: '/' }"
          class="text-[0.6rem] text-blue-800"
          >forget password</NuxtLink
        >
      </form>
    </div>
  </main>
</template>
