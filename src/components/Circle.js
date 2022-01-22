const Circle = ({light}) => {

    const change = (x) => {
        // console.log(`light is ${x}`)
        if(x==="ON"){
            return("orange");
        }
        else{return("gray");}
    }

    var style = {width:'125px',
        height:'125px',
        backgroundColor:change(light),
        borderRadius:'50%'};

    return(
        <div style={style}>
        </div>
    );
}

export default Circle;