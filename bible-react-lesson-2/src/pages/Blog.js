import React, {useEffect} from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
    const [content, setContent] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [blogData, setBlogData] = React.useState([]);

    const [error, setError] = React.useState(false);
    const [errorFirstName, setErrorFirstName] = React.useState(false);
    const [errorLastName, setErrorLastName] = React.useState(false);
    const [numberCaracters, setNumberCaracters] = React.useState([]);

    const getDate = () => {
        axios.get("http://localhost:3004/articles")
            .then(response => {
                console.log(response.data);
                setBlogData(response.data);
            })
    }

    useEffect(() => {
        getDate();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstName.length <= 3) {
            setErrorFirstName(true);
        } else {
            setErrorFirstName(false);
        }
        if (lastName.length <= 3) {
            setErrorLastName(true);
        } else {
            setErrorLastName(false);
        }
        if (content.length < 140) {
            setError(true)
        } else {
            setError(false)
        }
        if (firstName.length > 3 && lastName.length > 3 && content.length > 140) {

            axios.post("http://localhost:3004/articles", {
                firstName: firstName,
                lastName: lastName,
                content: content,
                date: Date.now()
            }).then(response => {
                getDate();
            })

            setErrorFirstName(false);
            setErrorLastName(false);
            setError(false);


            setFirstName('');
            setLastName('');
            setContent('');

        }
    }

    return (
        <div>
            <Logo/>
            <Navigation/>

            <div className="blog-container">
                <h1>Blog</h1>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <input type="text" placeholder="Last Name"
                           style={
                               {border: errorFirstName ? '1px solid red' : '1px solid #61dafb'}
                           }
                           onChange={
                               (e) => {
                                   setFirstName(e.target.value)
                                   setNumberCaracters({firstName: e.target.value.length})
                                   if (e.target.value.length) {
                                       setErrorFirstName(false)
                                   }
                               }
                           }
                           value={firstName}
                    />
                    {errorFirstName && <p> Veuillez renseigner un first name de plus de 3
                            caractère </p> || numberCaracters.firstName < 3 &&
                        <p style={{color: "black"}}>{numberCaracters.firstName} / 3 caractères</p>}
                    <input type="text" placeholder="First Name"
                           style={
                               {border: errorLastName ? '1px solid red' : '1px solid #61dafb'}
                           }
                           onChange={
                               (e) => {
                                   setLastName(e.target.value)
                                   setNumberCaracters({lastName: e.target.value.length})
                                   if (e.target.value.length) {
                                       setErrorLastName(false)
                                   }
                               }
                           }
                           value={lastName}
                    />
                    {errorLastName && <p> Veuillez renseigner un last name de plus de 3
                            caractère </p> || numberCaracters.lastName < 3 &&
                        <p style={{color: "black"}}> {numberCaracters.lastName} / 3 caractères</p>}

                    <textarea placeholder="Message" name="" id="post" cols="30" rows="10"
                              style={
                                  {border: error ? '1px solid red' : '1px solid #61dafb'}
                              }
                              onChange={
                                  (e) => {
                                      setContent(e.target.value)
                                      setNumberCaracters({content: e.target.value.length})
                                      if (e.target.value.length) {
                                          setError(false)
                                      }
                                  }
                              }
                              value={content}
                    ></textarea>
                    {error &&
                        <p> Veuillez écrire un minimum de {numberCaracters.content} / 140 caractères </p>
                        || numberCaracters.content < 140 &&
                        <p style={{color: "black"}}>  {numberCaracters.content} / 140 caractères </p>}
                    <input type="submit" value="Post"/>

                </form>

                <ul>
                    {blogData
                        .sort((a, b) => {
                            return new Date(b.date) - new Date(a.date);
                        })
                        .map((article) => (
                            <Article
                                key={article.id}
                                article={article}/>
                        ))}
                </ul>

            </div>
        </div>
    );
};

export default Blog;