import React, { useRef, useState } from 'react';



import { useCollectionData } from 'react-firebase-hooks/firestore';

import { db }  from '../../firebase'

import '../../styles.css'

function Previousoutputs() {
    const calculationsRef = db.collection("results");
    const query = calculationsRef.orderBy('createdAt', 'desc').limit(10);
  
    const [results] = useCollectionData(query, { idField: 'id' });
    
    return (
        
            <div className="resultsgrid">
            {console.log(results)}
                  {results && results.map(calc => <Calculationmessage key={calc.id} problem={calc.problem} solution={calc.solution} />)}
                </div>
              
    )

function Calculationmessage(props){
    return (<>
    <div>
    {props.problem} = {props.solution}
    </div><br/></>)
}



}
export default Previousoutputs;