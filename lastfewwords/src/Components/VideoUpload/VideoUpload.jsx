import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Form, Row, Col, Card} from 'react-bootstrap'
import {createClient} from '@supabase/supabase-js'
import {v4 as uuid} from 'uuid';

const supabase = createClient("https://zbauhrbpysjptwermjoe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYXVocmJweXNqcHR3ZXJtam9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MTQzOTksImV4cCI6MjA0MjQ5MDM5OX0.TtyGtWz3HI9qbvskz2rwfGbTLkyoZDuc_pB2OqI_fqI")

const CDNURL = "https://zbauhrbpysjptwermjoe.supabase.co/storage/v1/object/public/videos/"

const VideoUpload = () => {

    const [videos, setVideos] = useState([]);

    async function getVideos() {
        const { data, error} = await supabase
        .storage
        .from('videos')
        .list('')

        if(data !== null){
            setVideos(data);
        }else{
            console.log(error);
            alert("Error grabbing files from supabase")
        }

        getVideos();
    }

    useEffect(() => {
        getVideos();
    }, []);

    async function uploadfile(e){
        const videoFile = e.target.file[0];
        console.log("upload");
        const { error } = await supabase.storage
        .from('videos')
        .upload((uuid() + ".mp4", videoFile))
        if(error){
            console.log(error);
            alert("Error uploading file from supabase");
        }
    }

    console.log(videos)
  return (
    <div>
      <Container className='mt-5' style={{width: "700px"}}>
          <h1>Video Feeds</h1>
        <Form.Group className="mb-3 mt-3">
            <Form.Label>Upload your videos</Form.Label>
            <Form.Control type="file" accept="video/mp4" onChange={(e) => uploadfile(e)}/>
        </Form.Group>

        <Row xs={1} className="g-4">
            {
                videos.map((video) => {
                    console.log(video);
                    return(
                        <Col>
                            <Card>
                                <video height="380px" controls>
                                    <source src={CDNURL + video.name} type="video/mp4"/>
                                </video>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
      </Container>
    </div>
  )
}

export default VideoUpload
