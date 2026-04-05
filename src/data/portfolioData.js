export const portfolioData = {
  personalInfo: {
    name: "Imran Nawar",
    title: "AI Researcher",
    subtitle: "Computer Vision Researcher focusing on AI, robotics, and autonomous systems.",
    about: "I am a passionate AI Researcher with a strong background in Machine Learning, Deep Learning, and Computer Vision. I strive to build systems that understand and interact with the physical world autonomously.",
    email: "imran1nawar@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
  experience: [
    {
      id: 1,
      role: "AI Research Assistant",
      company: "University Lab",
      duration: "Jan 2022 - Present",
      description: [
        "Developing state-of-the-art computer vision models for object detection.",
        "Collaborating with a team of 5 researchers to publish papers.",
        "Implementing sensor fusion techniques for robotics."
      ]
    },
    {
      id: 2,
      role: "Machine Learning Engineer Intern",
      company: "Tech Corp",
      duration: "Jun 2021 - Dec 2021",
      description: [
        "Optimized deep learning models for edge devices and increased inference speed by 40%.",
        "Built data pipelines processing millions of images per day."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Autonomous Navigation System",
      description: "A comprehensive navigation system utilizing stereo vision and LiDAR data mapping environments in real-time.",
      technologies: ["Python", "PyTorch", "ROS", "C++"],
      link: "#"
    },
    {
      id: 2,
      title: "Real-time Object Detection",
      description: "Implemented a YOLO-based custom object detection model optimized for drone footage.",
      technologies: ["TensorFlow", "OpenCV", "Python"],
      link: "#"
    },
    {
      id: 3,
      title: "Robotic Arm Controller",
      description: "Reinforcement learning agent trained to control a 6-DOF robotic arm for precise pick-and-place tasks.",
      technologies: ["PyTorch", "OpenAI Gym", "ROS"],
      link: "#"
    }
  ],
  skills: [
    "Python", "C++", "PyTorch", "TensorFlow", "OpenCV", "ROS", "Machine Learning", "Deep Learning", "Computer Vision"
  ]
};
