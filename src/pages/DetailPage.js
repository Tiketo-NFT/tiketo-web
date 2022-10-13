import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CashImg from '../assets/img/Cash.png';
import LayoutNoFooter from '../component/LayoutNoFooter';


const Body = styled.div`
    background-color: white;
    padding: 24px;
`;

const StyledFooterBtn = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 48px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    font-weight: bold;
    width: 100%;
`;


function DetailPage() {
    const location = useLocation();
    const { festival } = location.state;


    return (
        <LayoutNoFooter>
            <Body>
                <div>
                    <div>
                        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '18px' }}>{festival.name}</h1>
                        <img src={festival.fullImg} style={{ width: '100%', marginBottom: '18px' }} />
                        <div style={{
                            width: '50px',
                            height: '24px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: 'black',
                            marginBottom: '18px',
                        }}>
                            <img src={CashImg} style={{ width: '16px', marginRight: '4px' }} />
                            <span style={{ fontSize: '24px', fontWeight: 'bold', marginRight: '4px' }}>{festival.price}</span>pUSD
                        </div>
                        <p style={{ marginBottom: '8px' }}>{festival.description}</p>
                        <p>{festival.schedule}</p>
                        <p>{festival.scheule}</p>
                        <p style={{ marginTop: '12px', color: '#676767', lineHeight: '150%' }}>Ullamco sunt nulla dolore Lorem deserunt sint. Laborum consequat sunt ea pariatur. Dolor laboris officia esse consequat labore qui aute reprehenderit ipsum qui magna duis. Dolore minim nisi ullamco laborum.</p>
                    </div>
                    <StyledFooterBtn>
                        <Link to='/ticketing' state={{ festival: festival }} style={{ textDecoration: 'none' }}>
                            <div style={{ color: 'white' }}>
                                Buy Ticket
                            </div>
                        </Link>
                    </StyledFooterBtn>
                </div>
            </Body>
        </LayoutNoFooter>
    );
}

export default DetailPage;