import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { GithubApi } from "../GithubApi/GithubApi";
import './Projects.css'
import { Title } from "../Title/Title";
export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      axios.get("https://api.github.com/users/flipzinho/repos")
        .then(response => {
          const updatedProjects = response.data.map(project => {
            return {
              ...project,
            };
          });
          setProjects(updatedProjects);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : ( 
          <div className="dv-top"> <Title text='Portfolio'/> 
         
          <div className="gitContainer"> 
         
          <GithubApi projects={projects}/> </div>
          </div>
          
           
         
        )}
      </div>
    );
  };
  

