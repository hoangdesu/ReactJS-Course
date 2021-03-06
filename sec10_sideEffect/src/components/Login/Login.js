import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

// REDUCER FUNCTIONS
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

// FUNCTION COMPONENT

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // USE REDUCER
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  // USE EFFECTS
  useEffect(() => {
    return () => {
      console.log("component removed");
    };
  }, []);

  // Avoid unnecessary effect executions, optimize code! Trigger only when isValid states change
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // DEBOUNCING EFFECT: CHECK INPUT EVERY 500ms
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log("checking form valid");
      // setFormIsValid(
      //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
      // );
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("input clean up");
      clearTimeout(debounceTimeout);
    };
  }, [emailIsValid, passwordIsValid]);

  // HANDLERS
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    // USING DISPATCH WITH ACTION
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });

    // setFormIsValid(
    //     emailState.isValid && event.target.value.trim().length > 6
    // );

    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({ type: "PASSWORD_INPUT", value: event.target.value });

    // setFormIsValid(
    //     emailState.isValid && event.target.value.trim().length > 6
    // );
    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    // clicking submit button will focus on missing input
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else if (!passwordIsValid) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${
              emailState.isValid === false ? classes.invalid : ''
          }`}
      >
          <label htmlFor="email">E-Mail</label>
          <input
              type="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
          />
      </div>
      <div
          className={`${classes.control} ${
              passwordState.isValid === false ? classes.invalid : ''
          }`}
      >
          <label htmlFor="password">Password</label>
          <input
              type="password"
              id="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
          />
                </div> */}
        <Input
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailInputRef}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
