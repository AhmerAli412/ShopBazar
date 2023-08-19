// import styled from "styled-components";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 40%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;

// const Register = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>CREATE AN ACCOUNT</Title>
//         <Form>
//           <Input placeholder="name" />
//           <Input placeholder="last name" />
//           <Input placeholder="username" />
//           <Input placeholder="email" />
//           <Input placeholder="password" />
//           <Input placeholder="confirm password" />
//           <Agreement>
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </Agreement>
//           <Button>CREATE</Button>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;

import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Cookies from "universal-cookie";
import './Register.css';
const cookies = new Cookies();




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;





const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [err, SetErr] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    let item = e.target.value;
    if(item.length < 8)
    {
      setError(true);
    }
    else
    {
      setError(false);
    }

    setPassword(item);
  };

  const handleSubmit = (e) => {

    if(password.length<8)
    {
      SetErr(true);
      // alert("invaliod");
      return;
    }

    e.preventDefault();
    console.log(name + "" + email + "" + password);
    const configuration = {
      method: "post",
      url: "https://shopybazar.onrender.com/api/auth/register",
      data: {
        username: name,
        email: email,
        password: password,
      },
    };

    axios(configuration)
      .then((result) => {
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("email", result.data.email);

        history.push("/");
      })
      .catch((error) => {
        console.log(error);
  //       if (
  //         error.response &&
  //         error.response.status >= 400 &&
  //         error.response.status <= 500
  //       ) {
  //         setError(error.response.data.message);
  //       }
      });
  };





    return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input  name="username" id="username" value={name}  onChange={handleName} placeholder="name" />
          {/* <Input placeholder="last name" />
          <Input placeholder="username" /> */}
          <Input name="email" value={email} onChange={handleEmail} placeholder="email" />
          <Input name="pwd" value={password}  onChange={handlePass} placeholder="password" />
        

          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {/* {error && <div className="error_msg">{error}</div>} */}
          {error ? <div className="error_msg">Password must be of 8 chracters</div> : ""}
          <Button>CREATE</Button>
          {err ? <div className="error_msg">Invalid</div> : ""}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;



//   return (
//     <>
//       <div className="bg-gray-900 min-h-screen">
//         <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
//           {/* <Navbar /> */}
//           <div className="relative py-20">
//             <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
//               <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
//                 <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
//                   <div className="p-8 py-12 sm:p-16">
//                     <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
//                       Sign Up at <span className="font-bold">Framecast</span>.
//                     </h2>
//                     <form onSubmit={handleSubmit} className="space-y-8">
//                       <div className="space-y-2">
//                         <label
//                           htmlFor="username"
//                           className="text-gray-600 dark:text-gray-300"
//                         >
//                           Username
//                         </label>
//                         <input
//                           type="text"
//                           name="username"
//                           id="username"
//                           value={name}
//                           onChange={handleName}
//                           autoComplete="username"
//                           className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label
//                           htmlFor="email"
//                           className="text-gray-600 dark:text-gray-300"
//                         >
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           value={email}
//                           onChange={handleEmail}
//                           autoComplete="email"
//                           className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
//                         />
//                       </div>
//                       <div>
//                         <div className="flex items-center justify-between">
//                           <label
//                             htmlFor="pwd"
//                             className="text-gray-600 dark:text-gray-300"
//                           >
//                             Password
//                           </label>
//                         </div>
//                         <input
//                           type="password"
//                           name="pwd"
//                           id="pwd"
//                           value={password}
//                           onChange={handlePass}
//                           autoComplete="current-password"
//                           className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
//                       >
//                         <span className="relative text-base font-semibold text-white dark:text-dark">
//                           Connect
//                         </span>
//                       </button>
//                       <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
//                         Have an account ?
//                         <Link
//                           to="/signin"
//                           className="btn btn-primary text-white ml-2"
//                         >
//                           Sign In
//                         </Link>
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="space-x-4 text-center text-gray-500">
//                   <span>© tailus</span>
//                   <a href="#" className="text-sm hover:text-primary">
//                     Contact
//                   </a>
//                   <a href="#" className="text-sm hover:text-primary">
//                     Privacy &amp; Terms
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
