import React, { Fragment } from 'react';

const Card = ({title, img, caption}) =>{
    return (
        <Fragment>
            <div
                className='w-[250px] h-auto flex-shrink-0
                    hover:shadow-md px-2 flex items-center flex-col
                    cursor-pointer hover:scale-[1.1]
                    transition-all duration-150 ease-out
                '>
                <img 
                    src={img} 
                    alt="" 
                    className='h-40 w-40 object-contain rounded-md'
                />

                <p className='font-semibold'>{title} </p>
                <p> {
                   caption
                    } 
                </p>
            </div>
        </Fragment>
    )
}

const Team = () => {
  return (
    <Fragment>
        <div
            className=' items-center flex-col'
        >
            <h1
                className='text-xl font-semibold text-center py-2'
            >Team</h1>

            <section className='w-full overflow-x-auto flex scrollbar-none flex-row flex-nowrap
                    gap-4 py-3 px-4
                '>
                <Card
                    caption='Director'
                    title={'Uaa Peter'}
                    img={'http://techbase.com.ng/images/puaa.jpg'}
                />
                <Card
                    caption='Director'
                    img={'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'}
                    title={'Uaa Peter'}
                />
                <Card
                    caption='Director, (CE0)'
                    img={'https://th.bing.com/th/id/OIP.gJ702c_B8Rwcf3jNnhNGgwHaHa?pid=ImgDet&w=1024&h=1024&rs=1'}
                    title={'Uaa Peter'}
                    
                />
                <Card
                    caption='Director'
                    img={'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'}
                    title={'Uaa Peter'}
                />
                <Card
                    caption='Director'
                    img={'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'}
                    title={'Uaa Peter'}
                />
                <Card
                    caption='Director'
                    img={'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'}
                    title={'Uaa Peter'}
                />
            </section>
        </div>
    </Fragment>
  );
};

export default Team;
