import {mount} from 'marketing/MarketingApp';
import React,{useRef , useEffect} from 'react';
import { useHistory } from 'react-router';
export default ()=>{
    const ref =useRef(null);
    const history = useHistory();
    useEffect(()=>{
        const { onParentNavigate } = mount(ref.current,{
            onNavigate : ({pathname : nextPathname}) =>{
                const {pathname} = history.location;
                // if check to avoid infinite loop container to sub & sub to container
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    },[])

    return <div ref={ref}/>
}