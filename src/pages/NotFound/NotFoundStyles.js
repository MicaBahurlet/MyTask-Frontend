import styled from "styled-components";

export const NoPage = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;

    z-index: 3;

    img {
        max-width: 500px;
        margin-bottom: 1rem;
        margin-top: 1rem;
        
    }

    h2 {
        font-family: var(--font-family);
    }

    p {
        font-family: var(--font-family);
    }

    button {
        background-color: var(--btn-color);
        border-radius: 10px;
        padding: 10px 20px;
        border: transparent;
        margin-top: 2rem;
        font-family: var(--font-family);
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 5rem;
        color: white;
        
        &:hover {
             background-color: var(--color-hover);
        }
       
    }


    @media (max-width: 768px) {
        
        img {
            max-width: 350px;
            margin-bottom: 1rem;
            margin-top: 1rem;
            z-index: -2;
        }
        p {
            width: 100%;
            height: auto;
            max-width: 300px;
            margin: 1 auto;
        }

        @media (min-width: 768px) { 
            img {
                max-width: 350px;
                margin-bottom: 1rem;
                margin-top: 1rem;

                z-index: -2;
            }

        }
  }

    /* z-index: -2; */
`;

