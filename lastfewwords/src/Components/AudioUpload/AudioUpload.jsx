import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Form, Row, Col, Card} from 'react-bootstrap'
import {createClient} from '@supabase/supabase-js'
import {v4 as uuid} from 'uuid';

const supabase = createClient("https://zbauhrbpysjptwermjoe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYXVocmJweXNqcHR3ZXJtam9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MTQzOTksImV4cCI6MjA0MjQ5MDM5OX0.TtyGtWz3HI9qbvskz2rwfGbTLkyoZDuc_pB2OqI_fqI")

const CDNURL = "https://zbauhrbpysjptwermjoe.supabase.co/storage/v1/object/public/videos/"

const AudioUpload = () => {

  const [audios, setAudios] = useState([]);

  async function getAudios() {
    const { data, error} = await supabase
    .storage
    .from('videos')
    .list('')

    if(data !== null){
        setAudios(data);
    }else{
        console.log(error);
        alert("Error grabbing files from supabase")
    }

    getAudios();
  }

  useEffect(() => {
    getAudios();
  }, []);

  async function uploadfile(e){
    const audioFile = e.target.file[0];
    console.log("upload");
    const { error } = await supabase.storage
    .from('videos')
    .upload((uuid() + ".mp3", audioFile))
    if(error){
        console.log(error);
        alert("Error uploading file from supabase");
    }
  }

  console.log(audios)

  
  return (
    <div>
      <Container className='mt-5' style={{width: "700px"}}>
          <h1>Audio Feeds</h1>
        <Form.Group className="mb-3 mt-3">
            <Form.Label>Upload your audio</Form.Label>
            <Form.Control type="file" accept="audio/mp3" onChange={(e) => uploadfile(e)}/>
        </Form.Group>

        <Row xs={1} className="g-4">
            {
                audios.map((audio) => {
                    console.log(audio);
                    return(
                        <Col>
                            <Card>
                                <audio height="380px" controls>
                                  <source src={CDNURL + audio.name} type="audio/mp3"/>
                                </audio>
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

export default AudioUpload
