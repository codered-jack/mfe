import {mount} from 'marketing/AuthApp';
import React,{useRef , useEffect} from 'react';
import { useHistory } from 'react-router';
export default ({onSignIn})=>{
    const ref =useRef(null);
    const history = useHistory();
    useEffect(()=>{
        const { onParentNavigate } = mount(ref.current,{
            initialPath:history.location.pathname,
            onNavigate : ({pathname : nextPathname}) =>{
                const {pathname} = history.location;
                // if check to avoid infinite loop container to sub & sub to container
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
            },
            onSignIn,
            // onSignIn:() =>{
            //     onSignIn();
            // }
        });

        history.listen(onParentNavigate);
    },[])

    return <div ref={ref}/>
}