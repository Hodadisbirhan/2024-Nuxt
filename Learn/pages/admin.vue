<script setup>
const headers = ['first_name',"last_name","email","phone"]
const data = [

{
id:1,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},
{
id:2,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},
{
id:3,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{
id:4,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{
id:5,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{
id:6,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{id:7,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},
{
id:8,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},
{
id:9,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{
id:10,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{
id:11,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

},{
id:12,
first_name:"Hodadis",
last_name:"Birhan",
email:"hodadisbirhan@gmail.com",
phone:"+125995183367"

}

]


const rowSelected = (value) => {

console.log(value)
}

const rowClicked = (id) => {

  console.log(id,"parent");
}

const sortedBy = (value) => {

console.log(value)
}

// definePageMeta({
// middleware:["gaurd"]
// })


</script>

<template>
<div class="px-3 flex flex-col gap-3  justify-center items-center h-[100vh] ">
<h1 class="w-full text-center text-3xl font-bold text-blue-950">List Of Users</h1>
<HTable :body="data" :headers="headers" :hasCheckBox="true" @selected:row="rowSelected" @sorted-by="sortedBy" class="border-1 border-solid " @row-clicked="rowClicked">

<template #first_name="{row}">

<div>
  

  {{ row.first_name }}
</div>

</template>
<template #last_name="{row}">

<div>

  {{ row.last_name }}
</div>

</template>
<template #email="{row}">

<div>

  {{ row.email }}
</div>

</template>


<template #phone="{row}">

<div>

  {{ row.phone }}
</div>

</template>

<template #footer="{value }">
<div>{{ value }}</div>
</template>
</HTable> 
 <NuxtLink :to="{name:'slug-show'}">Show</NuxtLink> 
<NuxtLink :to="{path:'/hodai/show'}">Show</NuxtLink>
</div>
</template>