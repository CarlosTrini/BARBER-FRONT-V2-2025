import { ProductsI } from "typesSystem/typesSystem";
import { useEffect, useState } from "react";
import { getAllProdcts } from "@services/publicSite/servicesBarberShop";
import css from '../../home.module.css';
import { Modal, Popover } from "antd";
import Button from "@components/button/Button";
import { Link } from "react-router";

const FAKE_PRODUCTS = [
    {
        id: '1234-1234-1234-1234',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 1',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 250
    },
    {
        id: '4321-4312-4312-4312',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 2',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 0

    },
    {
        id: 'asdf-asdf-asdf-asdf',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 3',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 0

    },
    {
        id: 'jklñ-jklñ-jklñ-jklñ',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 4',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 250

    },
    {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 5',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 250

    },
    {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 6',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 250

    },
    {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 7',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 250

    },
    {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/product.jpg',
        name: 'Bálsamo de crecimiento 8',
        longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit qui. Velit beatae cumque quibusdam repellendus eius earum iste modi corrupti rem perspiciatis iusto quasi dolores, harum sint ab temporibus magni, molestiae fugiat molestias! Hic eum ipsa, inventore explicabo dolorem eaque! Tempora itaque perferendis ad recusandae aspernatur labore nemo eaque assumenda veniam! Omnis culpa unde sequi ea porro, et quos dignissimos rerum fuga maiores. Enim repellendus blanditiis at officia, quae  .',
        shortDescription: 'labore aliquid rem eum culpa accusamus voluptatibus at?',
        price: 340.40,
        discount: 250

    }
]

const Products = () => {

    const [productStore, setProductsStore] = useState<ProductsI[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [loadingModal, setLoadingModal] = useState<boolean>(false)
    const [productDetails, setProductDetails] = useState<ProductsI>();
    const [qtyProduct, setQtyProduct] = useState<number>(0);

    const handleShowModal = (product: ProductsI | null) => {
        setLoadingModal(true)
        setShowModal(!showModal)
        setProductDetails(product || {} as ProductsI)
        setQtyProduct(0)
        setLoadingModal(false)

    }

    const handleAddCart = (product: ProductsI) => {
        console.log('PRODUCTO PARA EL CARRITO ==> ', product)
    }

    const handleAddFavorites = (product: ProductsI) => {
        console.log('PRODUCTO PARA FAVORITOS ==>', product)
    }

    const handleQtyProduct = (operation: 'plus' | 'minus') => {

        if (qtyProduct == 0 && operation == 'minus') return;

        if (operation == 'plus') {
            setQtyProduct(qtyProduct + 1)
        } else if (operation == 'minus') {
            setQtyProduct(qtyProduct - 1)
        }
    }


    const getProducts = async () => {
        // const response = await getAllLocations();
        // console.log(response);
        setProductsStore(FAKE_PRODUCTS as ProductsI[])
    }


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="">

                <div className="flex flex-col md:flex-wrap md:flex-row lg:justify-evenly  mt-[60px] ">
                    {
                        productStore?.map(product => (
                            <div className={`${css['card-product']}  w-[90%] md:w-[46.5%] lg:w-[30.5%] xl:w-[22.5%]  mb-[40px] rounded p-4 pb-5 mx-auto shadow-md [--tw-shadow-color:var(--color-dark)] `} key={product.id}>
                                <div className={`${css["img-product-container"]}`}>
                                    <img src={product.img} alt="" className="rounded rounded-lg" />
                                    <div className={`${css['img-options-container']}`}>
                                        <div className="w-[100px] h-full flex flex-col align-center justify-center md:justify-evenly">

                                            <Popover content='Al carrito' placement='left'>
                                                <p className="text-center cursor-pointer b-font-size-26 b-text-black"><i className="fa-solid fa-cart-shopping"></i></p>
                                            </Popover>
                                            <Popover content='Detalles' placement='left'>
                                                <p className="text-center cursor-pointer b-font-size-26 b-text-black" onClick={() => handleShowModal(product)}><i className="fa-solid fa-book"></i></p>
                                            </Popover>
                                            <Popover content='Lista de deseos' placement='left'>
                                                <p className="text-center cursor-pointer b-font-size-26 b-text-black"><i className="fa-solid fa-heart"></i></p>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center flex flex-col gap-3 mt-[10px] b-text-dark">

                                    <p className="b-font-weight-700 b-font-size-22 text-center">{product.name}</p>
                                    <p className="b-font-weight-700 b-font-size-14 w-[90%] text-start">{product.shortDescription}</p>

                                    {
                                        product.discount > 0
                                            ? (<>
                                                <p className="b-font-weight-700 b-font-size-20 text-end  b-text-orange">
                                                    <span className=" b-font-size-14 line-through mb-0 text-end  b-text-red">
                                                        {product.price}</span>
                                                    <i className="fa-solid fa-dollar-sign ms-3 me-1"></i>
                                                    {product.discount}</p>
                                            </>

                                            )
                                            : (
                                                <p className="b-font-weight-700 b-font-size-20 text-end  b-text-orange"><i className="fa-solid fa-dollar-sign me-1"></i> {product.price}</p>
                                            )
                                    }

                                </div>

                            </div>
                        ))
                    }






                </div>

                <div className="text-end mt-[40px]">
                    <Link to={'/store'} className="b-button b-button-color-steel b-text-light b-font-size-18 b-font-weight-700" >
                        Ver más productos <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>

            </div>


            {/* MODAL DE DETALLES DEL PRODUCTO */}
            <Modal
                closable={true}
                onCancel={() => handleShowModal(null)}
                onClose={() => handleShowModal(null)}
                destroyOnClose={true}
                open={showModal}
                footer={false}
                loading={loadingModal}
                className={css['products-modal']}
            >
                <div className="">
                    <h3 className="b-font-size-22 b-font-weight-800 ">{productDetails?.name}</h3>
                    <hr className="h-[5px] w-[90%] b-bg-gold border-none" />

                    <div className="flex mt-[20px]">
                        <div className="w-[40%]">
                            <img src={productDetails?.img} alt="" className="rounded" />
                        </div>
                        <div className="w-[60%] p-4 pb-0">
                            <p className="b-font-size-14 b-font-weight-500 mb-[20px]">{productDetails?.longDescription}</p>
                            {
                                productDetails?.discount && productDetails.discount > 0
                                    ? (<>
                                        <p className="b-font-weight-700 b-font-size-24 text-end  b-text-orange">
                                            <span className=" b-font-size-16 line-through mb-0 text-end  b-text-red">
                                                {productDetails?.price}</span>
                                            <i className="fa-solid fa-dollar-sign ms-3 me-1"></i>
                                            {productDetails?.discount}</p>
                                    </>

                                    )
                                    : (
                                        <p className="b-font-weight-700 b-font-size-24 text-end  b-text-gold"><i className="fa-solid fa-dollar-sign me-1"></i> {productDetails?.price}</p>
                                    )
                            }

                            <div className="">

                                <div className="w-full flex  items-center justify-center mt-[30px]  h-[50px]">
                                    <Button className="b-button b-button-color-steel text-center b-text-light me-2" onClick={() => handleQtyProduct('minus')}>
                                        <i className="fas fa-minus "></i>
                                    </Button>
                                    <p className="b-font-size-20 b-font-weight-700 mx-[10px]">{qtyProduct}</p>
                                    <Button className="b-button b-button-color-steel text-center b-text-light ms-2" onClick={() => handleQtyProduct('plus')}>
                                        <i className="fas fa-plus "></i>
                                    </Button>
                                </div>
                                <div className="w-full b-text-light">
                                    <Button className='b-button b-button-color-steel w-full mt-[20px]'>
                                        Añadir al carrito <i className="fa-solid fa-cart-shopping ms-2"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Modal>
        </>
    );
}

export default Products;