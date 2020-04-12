import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const From01 = () => {
    return (
        <form  id="" className="PT_ht_P20 T_fl_Clt T_pd_Ptop6">
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
            />
            {//<input className="IM_bd_all0 T_wd_P80 T_ht_full" name=""  id=""/>
            }
            <button className="T_wd_P20 T_ht_full btn01">댓글입력</button>
        </form>
    )
} 

export default From01;
