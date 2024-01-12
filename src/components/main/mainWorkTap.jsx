import { Container } from '@mui/material'
import React from 'react'
import Icon1 from '../../image/icon1.png'
import Icon2 from '../../image/icon2.png'
import Icon3 from '../../image/icon3.png'

const MainWorkTap = () => {
    return (
        <>
            <Container>
                <div className="worktap">
                    <h3 className='worktap-title'>
                        Как решать задачи на WorkTap?
                    </h3>
                    <p className="worktap-info">
                        Идеально подходит для бизнеса и частных лиц
                    </p>
                    <ul className="worktap-list">
                        <li className="list-item">
                            <img src={Icon1} alt="Icons" />
                            <h4 className="item-title">
                                Выберите услугу
                            </h4>
                            <p className="item-info">
                                В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.
                            </p>
                        </li>
                        <li className="list-item">
                            <img src={Icon2} alt="Icons" />
                            <h4 className="item-title">
                                Выберите услугу
                            </h4>
                            <p className="item-info">
                                В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.
                            </p>
                        </li>
                        <li className="list-item">
                            <img src={Icon3} alt="Icons" />
                            <h4 className="item-title">
                                Выберите услугу
                            </h4>
                            <p className="item-info">
                                В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.
                            </p>
                        </li>

                    </ul>
                </div>
            </Container>
        </>
    )
}

export default MainWorkTap