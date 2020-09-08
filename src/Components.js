import styled from "styled-components";

export const Page = styled.div`
        padding: 10% 20%;   
        font-family: Sector;           
    `;
export const Month = styled.p`
        font-size: 30pt;
        cursor: pointer;
    `;

export const DaysAndDescriptionPanel = styled.div`
        display: grid;         
        grid-template-columns: 700px 300px;                
        //background: #ee7700;
    `;

export const DaysPanel = styled.div`
        display: flex;   
        grid-column: 1;         
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        //background: #ee7700;
    `;

export const Day = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50px;
        font-size: 13pt;          
        //background: #fbdcc4;
        
        margin: 10px 20px 20px 0px;      
        transition: 0.5s;
        cursor: default;
        
        &:hover {
        background: #f2a07b;        
        transition: 0.5s;
        }
    `;

export const Description = styled.textarea`
        display: block;   
        grid-column: 2;    
        resize: none;
        border: none;
        border-left: 1px solid lightgrey;
        font-family: Sector;  
        font-size: 12pt;
        
        :focus {
        outline: none;
        }            
    `;