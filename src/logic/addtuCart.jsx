

// export const addtuCart = () => {


//   const CartPage = () => {
//     const cartpage = JSONS.parse(localStorage.getItem("cartpage")) || [];
//     const index = cartpage.findIndex((item) => item.title === title);

//     if (index > -1) {
//       cartpage.splice(index, 1);
//       localStorage.setItem("cartpage", JSON.stringify(cartpage));
//       toast.info(" Cart Pagedan olib tashlandi!");
//       setIsInCartpage(false);
//     } else {
//       const cartpro = {
//         title,
//         neWPrice,
//         img,
//       };
//       cartpage.push(cartpro);
//       localStorage.setItem("cartpage", JSON.stringify(cartpage));
//       toast.success("Mahsulot Cart Pagega qo‘shildi!");
//       setIsInCartpage(true);
//     }
//   };
// };
