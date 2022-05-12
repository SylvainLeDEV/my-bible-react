import React, {useEffect} from 'react';
import axios from "axios";
import logo from "./Logo";

const Article = ({article}) => {

    // Editing content
    const [isEditing, setIsEditing] = React.useState(false);
    const [errorEditing, setErrorEditing] = React.useState(false);
    const [editContent, setEditContent] = React.useState("");
    const [deleteArticle, setDeleteArticle] = React.useState(false);

    const dateFormater = (date) => {

        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    }

    const handleEditing = (e) => {
        e.preventDefault();

        if (article.firstName !== article.firstName || article.lastName !== article.lastName || article.date !== article.date) {
            alert("Petit malin, il faut remplir tous les champs !");
        }
        if ( editContent && editContent.length <= 140 && editContent.length === 0) {
            setErrorEditing(true);
        } else {
            const dataEditing = {
                firstName: article.firstName,
                lastName: article.lastName,
                content: editContent,
                date: article.date,
                updatedDate: Date.now()
            }
            console.log("Votre article a été modifié");
            axios.put(`http://localhost:3004/articles/${article.id}`, dataEditing)
                .then(res => {
                    setErrorEditing(false);
                    setIsEditing(false);
                })
        }

    }
    const handleDelete = (e) => {
        axios.delete(`http://localhost:3004/articles/${article.id}`)
            .then(res => {
                console.log("Votre article a été supprimé");
            })
        window.location.reload();
    }

    return (

        <div className="article" style={{background: isEditing ? '#06f5ef' : "white"}}>
            <div className="card-header">
                <div className="card-header__user-name">
                    <h3> {article.firstName} </h3>
                    <h3> {article.lastName} </h3>
                </div>
                <em> Post at : {dateFormater(article.date)} </em>
            </div>
            {
                isEditing ?
                    <div>
                <textarea
                    style={
                        errorEditing ? {border: "1px solid red"} : {}
                    }
                    autoFocus={true}
                    defaultValue={editContent ? editContent : article.content}
                    onChange={
                        (e) => {
                            setEditContent(e.target.value)
                            if (e.target.value.length <= 140) {
                                setErrorEditing(true);
                            } else {
                                setErrorEditing(false);
                            }
                        }
                    }

                ></textarea>

                        <p style={{
                            color: errorEditing ? "red" : "black",
                        }}
                        > Article doit
                            contenir {editContent.length ? editContent.length : article.content.length} /
                            140
                            caractère </p>
                    </div>
                    :
                    <p> {editContent ? editContent : article.content} </p>
            }
            <div className="btn-container">


                {isEditing ? <button onClick={(e) => {
                        handleEditing(e)
                    }}> Valider
                    </button> :
                    <button onClick={(e) => {
                        setIsEditing(true);
                    }}> Edit
                    </button>
                }
                <button onClick={(e) => {
                    if (window.confirm("Are you sure you want to delete this article?")) {
                        handleDelete(e)
                    }
                }}> Delete</button>
            </div>
        </div>
    );
};

export default Article;