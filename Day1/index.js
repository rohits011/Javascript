// Define an array with 10 elements, each representing a Java-related question and its options
const javaQuizArray = [
    {
      question: "What is the main purpose of Java?",
      options: [
        "Web development",
        "Game development",
        "Mobile app development",
        "Platform-independent programming",
      ],
      correctAnswerIndex: 3, // Index of the correct answer in the options array
    },
    {
      question: "Which keyword is used to declare a class in Java?",
      options: ["class", "type", "struct", "object"],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the default value of the data type 'int' in Java?",
      options: ["0", "1", "null", "undefined"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which Java keyword is used to define a constant?",
      options: ["final", "const", "static", "let"],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the purpose of the 'this' keyword in Java?",
      options: [
        "Refers to the current instance of the class",
        "Declares a new variable",
        "Accesses the previous class",
        "Denotes a reserved word",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which Java data type is used to store floating-point numbers?",
      options: ["float", "int", "double", "char"],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the purpose of the 'super' keyword in Java?",
      options: [
        "Refers to the superclass or parent class",
        "Refers to the subclass or child class",
        "Used to call the current class",
        "Denotes a reserved word",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which statement is used to exit a loop in Java?",
      options: ["break", "exit", "return", "finish"],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the role of the 'public' access modifier in Java?",
      options: [
        "Allows access from any class",
        "Restricts access to the current class",
        "Allows access within the same package only",
        "Prevents access from all classes",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which Java package provides support for networking?",
      options: ["java.net", "java.util", "java.io", "java.lang"],
      correctAnswerIndex: 0,
    },
  ];
  

  const answerElm=document.querySelectorAll(".answer");
  const [questionElm,option1,option2,option3,option4]=document.querySelectorAll(".question,#option1,#option2,#option3,#option4");
  const submitElm=document.querySelector("#submit");
  const score=0;
  let current=0;


 const loadQuiz=()=>{
    const{question,options}=javaQuizArray[current];
    questionElm.innerText=question;
    options.forEach((current,index)=>{
        window[`option${index+1}`].innerText=current
    });

    // console.log(options);
 }

 const getSelectedIndex=()=>{
    let ans=0;
    answerElm.forEach((current,index)=>{
        if(current.checked) ans=index;
    });
    return ans;
 }
 deselectOption=()=>{
    answerElm.forEach((current)=>current.checked=false);
 }

 submitElm.addEventListener("click",()=>{
    const selectedIndex=getSelectedIndex();
    console.log(selectedIndex);
    current++;
    if(current<javaQuizArray.length){
        deselectOption();
        loadQuiz();
    }


 });

loadQuiz()

  // Accessing individual questions, options, and correct answer indices

  