import { signal } from "@preact/signals-react";
import LoginBtn from "../Components/AuthBtns.jsx/LoginBtn";

export const checkAuth = signal(false);
export const authBtn = signal(<LoginBtn />);
