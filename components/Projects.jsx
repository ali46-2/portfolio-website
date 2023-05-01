import Project from "./Project";

function Projects() {
  const projectDetails = [
    {
      name: "Colorization of Black and White Images",
      description:
        "An image-to-image translation GAN to colorize black and white images using a customized version of the model from the Pix2Pix research paper. Instead of using the standard U-Net, this model replaces the encoder part of U-Net with a pretrained ResNet18.",
      url: "https://github.com/ali46-2/Pix2Pix_Colorization_ResNet",
      imagePath: "/projects/pix2pix.png",
    },
    {
      name: "Stock Price Predictor",
      description:
        "A demonstration of how to make a time series model in PyTorch to predict the price of a stock. The model uses multiple LSTMs (Long Short-term Memory) followed by fully connected layers. The API used to get the price data of a stock is provided by Alpha Vantage.",
      url: "https://github.com/ali46-2/stock_price_predictor",
      imagePath: "/projects/stock_price.png",
    },
    {
      name: "Realtime OCR With Text-to-Speech",
      description:
        "A Python program that captures video using a camera, preprocesses each frame, performs OCR to extract text, and then uses a text-to-speech engine to output the text as audio. It uses multiprocessing to increase performance through parallelization and to remove camera lag.",
      url: "https://github.com/ali46-2/realtime_ocr_with_text-to-speech",
      imagePath: "/projects/realtime_ocr.png",
    },
    {
      name: "GUI App to Access S3 Bucket on AWS",
      description:
        "A GUI application written in Python that allows the user to upload, download, and delete files from any of their S3 buckets on AWS. The app has been packaged into an executable, so that it can be run on systems that do not have Python installed.",
      url: "https://github.com/ali46-2/aws_s3_access_gui",
      imagePath: "/projects/aws_gui.png",
    },
    {
      name: "Urdu Speech to Text",
      description:
        "A Python Notebook showcasing how to transfer learn the Wav2Vec2 speech model on the Urdu language. The dataset used in this Notebook is the Mozilla Commonvoice Urdu Dataset v12.0. This Notebook was ran on the free version of Google Colab.",
      url: "https://github.com/ali46-2/Urdu-Speech-to-Text-Wav2Vec2",
      imagePath: "/projects/urdu_asr.png",
    },
  ];

  const list = projectDetails.map(function (details, idx) {
    return (
      <Project
        key={idx}
        name={details.name}
        description={details.description}
        imagePath={details.imagePath}
        imageSize={512}
        url={details.url}
        textOrder={idx % 2 == 0 ? 1 : 2}
        imageOrder={idx % 2 == 0 ? 2 : 1}
      />
    );
  });

  return (
    <div
      id="projects"
      className="w-full pt-24 flex flex-col justify-center items-center"
    >
      <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider highlight-transition p-4">
        My Projects
      </div>
      <div className="max-w-[400px] sm:max-w-[500px] lg:max-w-[900px] grid gap-8 p-4">
        {list}
      </div>
    </div>
  );
}
export default Projects;
