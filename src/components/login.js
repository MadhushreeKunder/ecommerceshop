import React from "react";
import { useAuth } from "../auth/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const { status, loginUserWithCredentials } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
    message: "",
    showPassword: "",
  });

  const loginUser = async () => {
    // 1: login

    if (loginCredentials.username && loginCredentials.password) {
      const result = await loginUserWithCredentials(
        loginCredentials.username,
        loginCredentials.password
      );
      // 2: navigate to the page we were going to before you sent us to /login page
      // navigate(state?.from ? state.from : "/");
      if (result.success) {
        navigate(state?.from ? state.from : "/");
      }
    } else {
      setLoginCredentials({
        ...loginCredentials,
        message: "Username & Password required",
      });
    }
  };

  //   return (
  //     <>
  //       <h1> Login/Logout toggle </h1>
  //       <button onClick={loginHandler}>
  //         {isUserLogin ? "I am logged In" : "I am logged out"}
  //       </button>
  //     </>
  //   );

  //   function loginHandler() {
  //     isUserLogin ? logout() : loginUserWithCredentials("aman", "kanishk");

  //   }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur
        excepturi, dignissimos laborum expedita velit voluptatem. Amet
        accusantium quidem eum aliquam odit perspiciatis voluptate explicabo
        quos expedita nesciunt delectus, vitae impedit sit velit sed tempora
        voluptas recusandae omnis quis non rem molestias iusto veniam! Corrupti
        tempora voluptatum autem ex cum et debitis ipsum aperiam. Esse doloribus
        repellat sapiente cumque temporibus, deleniti rem odio iste quod minus
        animi vitae! Cupiditate non quam ex, voluptas, nesciunt placeat
        architecto cumque quae, enim ipsum repudiandae iure id sequi nam at!
        Maiores facilis, debitis sequi doloribus, minima vitae fuga nam dolores
        hic unde nihil ducimus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eaque voluptatum provident esse! Suscipit
        necessitatibus tenetur minus. Ipsum aliquid voluptatum dignissimos
        dolores, debitis minus quae. Laborum veniam voluptates ratione corporis
        nesciunt debitis sapiente vitae nobis dignissimos nulla in unde
        asperiores, sint eum maiores quis placeat! Sapiente, delectus velit
        pariatur commodi explicabo provident eligendi dolore praesentium ipsum
        assumenda cum possimus perspiciatis quaerat doloribus deserunt, vero, id
        rem aut saepe adipisci ex repudiandae! Itaque, dicta temporibus id porro
        eveniet, quas totam quos deleniti, esse eaque neque ex vel eos
        consectetur expedita nostrum similique voluptatibus consequuntur numquam
        suscipit odit! Qui fugiat voluptas odit facilis adipisci enim soluta
        incidunt natus, dolorem quisquam ipsam eligendi placeat excepturi, aut
        asperiores harum autem! Obcaecati doloremque aut dolorem sit! Inventore,
        quas nulla, delectus ab ducimus repellendus, ipsam numquam praesentium
        distinctio et saepe modi blanditiis tenetur? Perspiciatis dolore quam
        eum laborum aliquam eveniet cum eius necessitatibus. Nam cupiditate
        voluptatum totam officiis commodi accusantium expedita sequi aspernatur
        nostrum assumenda accusamus explicabo inventore distinctio illum culpa
        illo eius, eligendi rem ea pariatur earum? Quidem dolorum id
        voluptatibus officia et magni neque vero veniam quae, quia natus
        doloribus unde numquam eius illum exercitationem, laudantium fuga harum
        cumque in enim. Excepturi odit repellat enim?
      </p>
    </div>
  );
}
