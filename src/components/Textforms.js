import React,{useState} from 'react'

export default function Textforms(props) {
    //const [title,setitle] = useState('this is initial title');
   // setitle('This is updated');
   let arr=["red","pink","yellow"];
   let index=0;
   let n=arr.length;
   //console.log(n);
   const updatecount = () =>{
        
        console.log("update!!");
        let newtext= text.toUpperCase();
        settext(newtext);
        setoriginal(text);
        props.showAlert("UpperCase updated","success");
       
        
   }
   const changed =(event) =>{
    
           settext(event.target.value);
   }

    const lower =()=>{
        
         
         let newtext=text.toLowerCase();
         settext(newtext);
         setoriginal(text);
         props.showAlert("Lower case updated","success");
    }

    const cleartext = () =>{
          
           let newtext='';
           settext(newtext);
           setoriginal(text);
           props.showAlert("cleared text sucessfully","success");
    }
    
    const makeBold =() =>{
        
        settext(originaltext);
        props.showAlert("Bolded","success");


    }
    const changecolor =()=>{
        
        document.getElementById("mybox").style.color="#042743";
        document.getElementById("mybox").style.background=arr[index];
        index=(index+1)%n;
        props.showAlert("hooo! background changed ","success");
    }

    const handlecopy= () => {
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Sucessfullt!!","success");
    }
   
   const [text,settext]=useState('');
   const [originaltext,setoriginal]=useState('');

  // const [title, settitle] = useState('initial');
   //settitle("this is updated");
    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1 > {props.heading} </h1>
            
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <label htmlFor="mybox" className="form-label">{props.text}</label>
                <textarea className="form-control" id="mybox" value={text} onChange={changed}  rows="13" style={{backgroundColor:props.mode==='dark'?'white':'gray'}}></textarea>
            </div>
            
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={updatecount} >Toupper</button> 
            
            <button type="button" className="btn btn-warning mx-2 my-2" onClick={lower}>Tolower</button>
            <button  type="button" className="btn btn-success mx2 my-2" onClick={cleartext}>Clear all</button>
            <button  type="button" className="btn btn-success mx-2 my-2 "   onClick={makeBold}>Undo</button>
            <button  type="button" className="btn btn-success mx-2 my-2" onClick={changecolor}>Changecolor</button>
            <button  type="button" className="btn btn-success mx-2 my-2" onClick={handlecopy}>Copy Text</button>
        </div>

        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>summary</h1>
            <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} no of words and {text.length} no of character</p>
            <p>time taken to read is { 0.08* ((text.split(" ").length)-1)} </p>
            <p>preview</p>
            {text.length>0?text:"Enter something"}
          
        </div>
           
           

        </> 
    )
}

