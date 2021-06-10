import React from 'react'
import { Upload,message,Spin } from 'antd';
import ImgCrop from 'antd-img-crop';
import AvatarDisplay from './avatar'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



const UploadPic = () => {
  const [fileList, setFileList] = React.useState([]);
  const [open,setOpen]= React.useState(false);
  const [loading,setLoading]= React.useState(false);

const domain = "http://entekhab1400.pythonanywhere.com"



  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          
        });
      })
      .catch(err => {
        console.log(err);
      });
  }



  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    console.log(newFileList[0]);

    if (newFileList[0].status == 'uploading') {
setLoading(true)
    }
    if (newFileList[0].status === 'done') {
      message.success(`عملیات با موفقیت انجام شد `);
      setOpen(true);
      setLoading(false)

    } else if (newFileList[0].status === 'error') {
      message.error(`خطا دوباره امتحان کنید`);
      setLoading(false)

    }
    
   
   
    
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
        console.log("helllllo"+reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <div>
              <Spin spinning={loading} tip="در حال انجام عملیات " >
<ImgCrop rotate>
      
      <Upload
        action={`${domain}/upload/`}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        name='image'
      >
        {fileList.length < 1 && '+ Upload'}
        
      </Upload>
    </ImgCrop>
    { open ? <div>
        
        <AvatarDisplay src={`${domain}/media/${fileList[fileList.length-1].response}`}/>
        <br/>
        
        <a
        href={`${domain}/media/${fileList[fileList.length-1].response}`}
        download
        onClick={e => download(e)}
      >
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
          دانلود
        </Button>
      </a>
      
      <br/><br/><br/><br/>
    </div>
: null}
</Spin>
    </div>
    
  );
};

export default UploadPic 