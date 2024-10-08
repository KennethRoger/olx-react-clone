import React from "react";
import Home from "./assets/components/Home/Home";
import Product from "./assets/components/Product/Product";
import Sell from "./assets/components/Sell/Sell";
import { useState, useEffect } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./assets/components/ProtectedRoute/ProtectedRoute";

export const UserContext = React.createContext();
export const LoadingContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google sign in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setLoading(false);
      console.log(product);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("user logged out");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <LoadingContext.Provider value={loading}>
        <UserContext.Provider
          value={{ user, handleGoogleSignIn, handleLogout, setLoading }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sell"
              element={
                <ProtectedRoute>
                  <Sell />
                </ProtectedRoute>
              }
            />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="*"
              element={"Replace with an element for showing not found"}
            />
          </Routes>
        </UserContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}

export default App;
