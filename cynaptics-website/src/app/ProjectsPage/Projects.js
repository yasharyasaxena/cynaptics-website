//KEEP A MAX OF 2 DESCRIPTIONS AND A MAX OF 1 VIDEOS AND 2 IMAGES(display_image excluded)
//DONOT ADD A SLASH IN THE TITLE ELSE THAT WILL ACT AS A NEW PATH

export const Projects = [
    {
        id: 1,
        Achievements: "rank 1",
        project_title: "Sign Language Translator",
        desc1: "In this presentation, we will be demonstrating a Computer Vision demo using YOLOv5 on the American Sign Language Dataset including 26 classes.The model identifies signs in real time as well as with input image or audio and builds bounding boxes showing label with confidence value..The model is showcased using streamlit which can take input as an image.",
        people_involved:
            "<div>Prajakta Darade<br>Samip Shah<br>Saral Sethi<br>Tanisha Sahu</div>",
        github_link:
            "https://github.com/CynapticsAI/IITISoC-22-Sign-Language-Translator",
        display_image: require("../../../public/images/Projects/project7/display_image.jpeg"),
        image1: require("../../../public/images/Projects/project7/image1.jpg"),
    },

    {
        id: 2,
        project_title:
            "Bosch's Model Extraction Attack For Video Classification",
        display_desc:
            'The folder structure consists of four directories: BlackBox_P1, BlackBox_P2, GreyBox_P1, and GreyBox_P2. These directories contain scripts for training extracted models from victims named SwinT and MoViNet, under Black Box and Grey Box settings. Each directory has setup instructions in the corresponding "setup_readme" file. Additionally, there is an "Evaluation_All" folder with Jupyter Notebooks for evaluation, and details on the setup and run environment can be found in the "eval_readme" file. The training codes were executed on a server with an NVIDIA V100 GPU, while the evaluation codes were run on Google Colaboratory using a Pro Plus subscription.',
        desc1: '<div className="text-3xl my-5">Folder Structure</div><div>BlackBox_P1: Contains scripts for training the extracted model from SwinT victim under the Black Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div>BlackBox_P2: Contains scripts for training the extracted model from MoViNet victim under the Black Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div> GreyBox_P1: Contains scripts for training the extracted model from SwinT victim under the Grey Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div>GreyBox_P2: Contains scripts for training the extracted model from MoViNet victim under the Grey Box setting. Refer to setup_readme within the folder for detailed instructions on running the code for training.</div><div>Evaluation_All - Contains Jupyter Notebooks for evaluation. Refer to eval_readme within the folder to get information on the setup and run environment.</div><div><div className="text-3xl my-5">Running Environment</div> Training codes were run on a single server equipped with NVIDIA V100 GPU. Evaluations codes were run on Google Colaboratory with a Pro Plus subscription.</div>',
        github_link: "https://github.com/CynapticsAI/Bosch-InterIIT_2022",
        display_image: require("../../../public/images/Projects/project3/display_image.jpg"),
        image1: require("../../../public/images/Projects/project3/image1.png"),
    },
    {
        id: 3,
        project_title: "AI CHAT BOT",
        desc1: "This is a simple AI Chat Bot, build using rasa framework. Rasa provides flexible conversational AI for building text and voice-based assistants.<div>For Frontend we have used rasa’s standard frontend.</div><div>This chat bot give answer to any general questions related to IIT Indore. This can give answers to questions like about iiti, faculties/Professor, departments, placement, hostels, campus, events, medical facilities, sport facilities, international relations and many other questions.</div>",

        github_link: "https://github.com/CynapticsAI/AI-CHAT-BOT",
        display_image: require("../../../public/images/Projects/project4/display_image.png"),
        image1: require("../../../public/images/Projects/project4/image1.png"),
    },
    {
        id: 4,
        project_title: "Image Captioning-Video Summarizer",
        desc1: '<div className="text-3xl my-5">Overview</div>Image captioning using attention based encoder-decoder model.The idea is discussed in <a href="https://arxiv.org/abs/1502.03044" className="underline text-red-500">Show, Attend and Tell: Neural Image Caption Generation with Visual Attention</a>. Recurrent Neural Networks (RNN) are used for varied number of applications including machine translation. The Encoder-Decoder architecture is utilized for such settings where a varied-length input sequence is mapped to the varied-length output sequence. The same network can also be used for image captioning. We used a ResNet with pretrained weights as encoder to make feature vectors from the input images and GRU an variant of RNN as decoder.Now for Video Summarization using OpenCV library we will capture frames in video at specific time interval(1 frame per 2 seconds) and we will generate captions to all these frames using above said Image captioning model and retain only those captions which have a low similarity score with the immediate previous caption and that Threshold similarity score is 0.5.Then we perform Abstractive Summarization using T5 base Transformer model',
        desc2: '<div className="text-3xl my-5">Implementation</div>In the image_captioning_.ipynb we download the datasets and all of the preprocessing training and evaluation takes place.<div>>Dataset Used: MS-COCO(subset containing 15000 randomly shuffled images)</div><div>Vocabulary: The vocabulary consists of mapping between words and indices(we limited the size of vocabulary to 5000 instead of 10000 as discussed in paper to save memory)</div><div>Encoder: ResNet without the final classification layer with pretrained weights. we could also try trainig the encoder instead of loading pretrained weights.</div><div>Decoder: GRU(Gated recurrent unit) is used as decoder with Bahdanau attention. Using attention based architechture we can observe which parts of images were identified for generating words(or captions). 2 GRUs are stacked on top of each other and 3 fully connected layers for predictions with 0.25 droupout at every stage in decoder.</div><div>Caption Generation: Based on highest probability/greedy search.</div><div>Training: Teacher forcing is used to reduce training time for the RNN.</div><div>Score: Maximum cosine similarity between the 5 true captions and the predicted caption. Mean cosine similarity of 50 random images : 0.82622829</div><div></div>Video to frames: Using OpenCV</div><div>Transformer used(for Summarization): T5 base</div>',
        display_desc:
            "Image captioning is done using an attention-based encoder-decoder model with a pre-trained ResNet as the encoder and GRU as the decoder. Frames are extracted from videos, and captions are generated using the image captioning model, retaining only captions with low similarity scores to the previous caption. Video summarization is performed by extracting frames using OpenCV and using the T5 base Transformer model for abstractive summarization. The implementation includes dataset handling, vocabulary mapping, model architecture, training with teacher forcing, and evaluation using cosine similarity.",
        github_link: "https://github.com/CynapticsAI/ML8-ImageCaptioning",
        video: "/videos/projects/project2/video1.mp4",
        display_image: require("../../../public/images/Projects/project2/display_image.jpeg"),
        image1: require("../../../public/images/Projects/project2/image1.jpeg"),
    },

    {
        id: 5,
        project_title: "Rock Paper Scissors Using CV",
        desc1: 'A simple Rock-Paper-Scissors game using CV in python For IITISOC-21<div>Rules and procedure to play the interactive game:</div><div> While playing the game, make sure that the background is plain (a white wall, a notebook for a background, etc.).</div><div> It is preffered to make clear and upright gestures to get best prediction accuracy.</div><div> The gesture should lie completely inside the designated box on the right side.</div><div> At any time, press "q" to quit the game.</div><div> Keep up the volume to enjoy the retro music alongside !</div>',

        github_link:
            "https://github.com/CynapticsAI/ML18_Rock-Paper-Scissors-using-CV",
        display_image: require("../../../public/images/Projects/project5/display_image.png"),
        image1: require("../../../public/images/Projects/project5/image1.jpg"),
    },
    {
        id: 6,
        Achievements: "Rank 1",
        project_title: "Image Denoising",
        desc1: "With CCTV images not being very clear on zooming there is a great demand for image denoising models. Build a model which takes input of noisy RGB images and outputs denoised images. Carefully study the kind of noise CCTV images have and target accordingly.",
        people_involved:
            "<div>Khushi Sawla<br>Krish Agrawal<br>Rupal Shah</div>",
        github_link:
            "https://github.com/CynapticsAI/IITISoC-22-Image-Denoising",
        display_image: require("../../../public/images/Projects/project6/display_image.png"),
        image1: require("../../../public/images/Projects/project6/image1.jpg"),
    },
    {
        id: 7,
        project_title: "Face Recognition",
        desc1: "<div>The Backend program :</div><p >The face_rec_video.py file and has been run on jupyter notebook as shown in Test_Video.</p><p >A folder containing known faces to be trained is also uploaded.</p><p >A test video of the face_recognition is also uploaded.</p><p >We have currently implemented face recognition using a library named &apos;face_recognition&apos; and &apos;OpenCV&apos;</p><p >The basic methodology is still quite the same as compared to the standard FaceNet and YOLO application put together:</p><div><div><div> <div>1)Get a database of known images and train the model using functions in &apos;face_recognition&apos;.</div> <div>2)Take input of a live video feed(requires webcam).</div><div>3)Implement &apos;cnn&apos; model to extract features from bounding box.</div><div>4)Compare the features extracted using functions in &apos;face_recognition&apos; with a certain tolerance level for %match.</div><div>5)Display the matched name if tolerance is passed.</div></div></div></div>",
        desc2: "<div>The Frontend program:</div><div><div><div>The frontend program is purely an implementation of FLASK using python and html. <div>To support the styles we have used BOOTSTRAP, CSS</div><div>The structuring of the frontend into html and python files has been accomplished using a library of FLASK called JENGO.</div><div>While debugging for user-friendly purposes, another library called WERKZEUG</div><div>A database called face.db is made in order to store user info. However, the images uploaded is not stored here for the purpose of easy access by the OpenCV.</div>A different folder called Faces replaces the known_faces during deployment of code.</div></div></div><div><br></div>",
        display_desc:
            "The backend program uses the 'face_recognition' and 'OpenCV' libraries to perform face recognition. It involves training the model with known faces, extracting features from bounding boxes, comparing features with a tolerance level for matching, and displaying the matched name. User information is stored in a 'face.db' database, while uploaded images are stored in a 'Faces' folder for easy access by OpenCV during deployment.In summary, the face recognition system combines a backend program that utilizes 'face_recognition' and 'OpenCV' for face recognition tasks. The system involves training the model, comparing features, displaying results, and storing user information and images separately for efficient processing.",
        github_link: "https://github.com/CynapticsAI/Face_Recog",
        video: "/videos/projects/project1/video1.mp4",
        display_image: require("../../../public/images/Projects/project1/display_image.jpg"),
        image1: require("../../../public/images/Projects/project1/image1.jpg"),
        image2: require("../../../public/images/Projects/project1/image2.jpg"),
    },
    {
        id: 8,
        project_title: "Music Recommendation System",
        desc1: "<div>Creating the best algorithm for music recommender system by testing various recommendation techniques</div>",
        display_desc:
            "Creating the best algorithm for music recommender system by testing various recommendation techniques.",

        github_link: "https://github.com/CynapticsAI/MusicReccomender",
        display_image: require("../../../public/images/Projects/project8/display_image.png"),
    },
    {
        id: 9,
        project_title: "Anywhere Piano",
        desc1: "<div>Creating real time virtual piano using CV that can be played anywhere and anytime with adjustable piano size</div>",
        display_desc:
            "Creating real time virtual piano using CV that can be played anywhere and anytime with adjustable piano size",
        github_link: "https://github.com/CynapticsAI/AnywherePiano",
        video: "/videos/projects/project9/video1.mp4",
        display_image: require("../../../public/images/Projects/project9/display_image.png"),
    },
    {
        id: 10,
        project_title: "LUX AI RL",
        desc1: "<div>Introduction and extensive exposure to RL and its intricacies by trying different RL Algorithms on LUX AI Competition</div>",
        display_desc:
            "Introduction and extensive exposure to RL and its intricacies by trying different RL Algorithms on LUX AI Competition",
        github_link: "https://github.com/CynapticsAI/LuxAI-RL",
        display_image: require("../../../public/images/Projects/project10/display_image.png"),
    },
    {
        id: 11,
        project_title: "Tranlate and Summarize News",
        desc1: "<div>Creating a system which automatically delivers news summaries in local language, keeping in mind the fact that many people not well versed with English also like to keep up with the daily happenings of the world. Task is to create an efficient pipeline and ensure that the factuality of the news through summarization and translation</div>",
        display_desc:
            "Creating a system which automatically delivers news summaries in local language, keeping in mind the fact that many people not well versed with English also like to keep up with the daily happenings of the world. Task is to create an efficient pipeline and ensure that the factuality of the news through summarization and translation",
        github_link: "https://github.com/CynapticsAI/NewsFlash",
        display_image: require("../../../public/images/Projects/project11/display_image.png"),
    },
    {
        id: 12,
        project_title: "EMG signal gesture identification",
        desc1: "<div>Creating a model that is capable of classifying different arm gestures whose signal data is recorded using myoarm bands. This project gave an exposure to digital signal processing and various classification model in existence</div>",
        display_desc:
            "Creating a model that is capable of classifying different arm gestures whose signal data is recorded using myoarm bands. This project gave an exposure to digital signal processing and various classification model in existence",
        github_link: "https://github.com/CynapticsAI/EMG-Gesture-Detection",
        display_image: require("../../../public/images/Projects/project12/display_image.png"),
    },
    {
        id: 13,
        project_title: "Automatic Meeting Notes",
        desc1: "<div>Developing a model to make automatic meeting notes from the Audio recording of the meeting and translating it to the user specific language</div>",
        display_desc:
            "Developing a model to make automatic meeting notes from the Audio recording of the meeting and translating it to the user specific language",
        video: "/videos/projects/project13/video1.mp4",
        github_link: "https://github.com/CynapticsAI/AutomaticMeetingNotes",
        display_image: require("../../../public/images/Projects/project13/display_image.png"),
    },
    {
        id: 14,
        project_title: "Adobe-Mid Prep Problem Statement: Behaviour Simulation CHallenge-Inter IIT Tech Meet",
        desc1: "<div>The challenge involves behavior simulation and content generation, divided into two tasks. Behaviour Simulation focuses on to give the user, an estimated number of likes that a particular tweet will recieve on twitter if the tweet is posted on the platfrom from the community. The Content Generation aims to generate the content of the tweet, given the metadata of the tweet, i.e. given the number of likes, content attached, time, usernames etc. predict what would be the tweet.</div>",
        display_desc:
            "<div>The challenge involves behavior simulation and content generation, divided into two tasks. Behaviour Simulation focuses on to give the user, an estimated number of likes that a particular tweet will recieve on twitter if the tweet is posted on the platfrom from the community. The Content Generation aims to generate the content of the tweet, given the metadata of the tweet, i.e. given the number of likes, content attached, time, usernames etc. predict what would be the tweet.</div>",
        github_link: "https://github.com/CynapticsAI/Adobe-Behaviour-Simulation-Challenge",
        display_image: require("../../../public/images/Projects/project14/display_image.png"),
    },
    {
        id: 15,
        project_title: "DevRev-High Prep Problem Statement: Inter IIT Tech Meet",
        desc1: "<div>The primary goal of this challenge was to design a language model equipped with a toolkit capable of generating an output. This output should be a subset of the tools and their corresponding arguments, enabling the composition of an answer to a natural language query inputted by the user.</div>",
        display_desc:
            "The primary goal of this challenge was to design a language model equipped with a toolkit capable of generating an output. This output should be a subset of the tools and their corresponding arguments, enabling the composition of an answer to a natural language query inputted by the user.",
        github_link: "https://github.com/CynapticsAI/DevRev-InterIIT_2023",
        display_image: require("../../../public/images/Projects/project15/display_image.png"),
    },
    {
        id: 16,
        project_title: "TryOnAI",
        desc1: "<div>Try On AI refers to an application that allows users to virtually 'try on' clothing, accessories, or other items using augmented reality (AR) or virtual reality (VR) technology. This project could involve creating a platform where users upload a photo of themselves, and the AI technology superimposes different clothing items onto their image to show how they might look when wearing those items</div>",
        display_desc:
            "Try On AI refers to an application that allows users to virtually 'try on' clothing, accessories, or other items using augmented reality (AR) or virtual reality (VR) technology. This project could involve creating a platform where users upload a photo of themselves, and the AI technology superimposes different clothing items onto their image to show how they might look when wearing those items",
        github_link: "https://github.com/CynapticsAI/TryOnAI",
        display_image: require("../../../public/images/Projects/project16/display_image.png"),
    },
    {
        id: 17,
        project_title: "Stock Prize Prediction",
        desc1: "<div>This project aims to predict the prices of stocks using historical data and machine learning algorithms. This project is based on Time Series Prediction models like meta's fbprophet and also models based on LSTM (RNN).</div>",
        display_desc:
            "This project aims to predict the prices of stocks using historical data and machine learning algorithms. This project is based on Time Series Prediction models like meta's fbprophet and also models based on LSTM (RNN).",
        github_link: "https://github.com/CynapticsAI/StockPricePrediction",
        display_image: require("../../../public/images/Projects/project17/display_image.png"),
        image1: require("../../../public/images/Projects/project17/image1.png"),
    },
    {
        id: 18,
        project_title: "AI Companion",
        desc1: "<div>AI Companion that listens to you and talks to you. It uses OpenAI Whisper-Tiny model that convert speech to text, PersonaGPT model which responds to the output and gTTS model that converts text to speech.</div>",
        display_desc:
            "AI Companion that listens to you and talks to you. It uses OpenAI Whisper-Tiny model that convert speech to text, PersonaGPT model which responds to the output and gTTS model that converts text to speech.",
        github_link: "https://github.com/CynapticsAI/AICompanion",
        display_image: require("../../../public/images/Projects/project18/display_image.png"),
    },
];
