// 7.28
// 리액트-리덕스에서는 useSelector랑 useDispatch 사용
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase, increaseBy } from '../modules/counter';

const ContainerCounter = () => {
    const count = useSelector((state:RootState)=>state.counter.count);         // (state:RootState) --> state의 타입지정이 필요해서 modules의 index.tsx에서 맨마지막 애를 내보내준거임 / state의 타입= RootState
    const dispatch = useDispatch();

    //modules의 counter.tsx에서 액션생성함수 불러오기
    const onIncrease = () => {
        dispatch(increase())                //increase() 액션생성함수
    }
    const onDecrease = () => {
        dispatch(decrease())                //decrease() 액션생성함수
    }
    const onIncreaseBy = (diff:number) => {
        dispatch(increaseBy(diff))          //increaseBy() 액션생성함수
    }
    return (
        <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease} onIncreaseBy={onIncreaseBy} />
    );
};

export default ContainerCounter;