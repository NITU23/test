import React, { useContext } from 'react';
import cartContext from '../Contexts/cartContexts';
import NoItem from './NoItem';
import ViewAddedItem from './ViewAddedItem';

const ViewCart = () => {
  const data = useContext(cartContext);

  return (
    <div>
      <div>
        {data.item && data.item.length > 0 ? (
         <ViewAddedItem items={data.item}/>
        ) : (
         <NoItem />
        )}
      </div>
    </div>
  );
};

export default ViewCart;
