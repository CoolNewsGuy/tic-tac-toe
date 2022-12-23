const Player = (info, name, score, isStarter) => {
   info = document.querySelector(info);
   name = document.querySelector(name);
   score = document.querySelector(score);

   return {
      info,
      name,
      score,
      isStarter,
   };
};
