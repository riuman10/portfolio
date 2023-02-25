import Head from "next/head";
import { useState, useEffect } from "react";
import supabase from "@/utils/supabase";

const Brainchild = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("children").select();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <h1 className={`text-blue-200 text-3xl`}>Brainchild</h1>
        {posts && posts.map((item) => (
            <div>
                <p>{item.title}</p>
                <p>{item.id}</p>
            </div>
        ))}
    </div>
  );
};

export default Brainchild;
