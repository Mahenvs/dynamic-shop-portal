
import Form from 'react-bootstrap/Form';
import Button from '../UI_Elements/Button';
import { form_data } from '../data';
import './AddProduct.css';
import CustomFormControl from '../UI_Elements/CustomFormControl';
import CustomFormLabel from '../UI_Elements/CustomFormLabel';
import { useRef, useState } from 'react';
import Modal from './Modal';
import Card from './Card';

const AddProduct = () => {

    // const [ProductName, setProductName] = useState(null);
    const [formValue,setFormValue] = useState({
        Name: '',
        Category: '',
        Description: '',
        Price:'',
        DiscountedPrice:'',
        Unit:''
    });
    const modal = useRef();
    const handlerInput = (event) =>{
        setFormValue(
            {
                ...formValue, 
                [event.target.id]:event.target.value
            })
    }
    const onSave = () => {
        console.log("Submitted data ",formValue)
        modal.current.open();

    }
    const closeHandler =() =>{
        modal.current.close();
    }

    let modalActions = <button onClick={closeHandler}>Close</button>


    
    return <>
        <Card>
        <span className = 'flex justify-center '>

            <Form className='mt-3'>

                <h3>Add a Product</h3>                
                {
                    form_data.map((item,index) => (
                        <section className='mt-3 ' key={index}>
                            <CustomFormLabel label={item.label} />
                            <CustomFormControl title={item.title} type={item.type} id={item.id} 
                            inputChange={handlerInput} value={formValue.id}
                            />
                        </section>
                    ))
                }
                <span className='flex justify-end mb-1'>
                    <Button title="Save" class="text-right h-9"  onClickButton={onSave}> </Button>
                </span>
            </Form>
            
        </span>
        </Card>
        <Modal
        ref={modal}
        title="Success!!! "
        content="Data Saved"
        actions={modalActions}
      />
    </>
}

export default AddProduct;