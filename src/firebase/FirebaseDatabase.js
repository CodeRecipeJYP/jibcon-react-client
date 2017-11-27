const FirebaseDatabase = {
  getPushList: (done) => {
    setInterval(() => {
      done([
        {
          sender: 'Euijun',
          message: 'aaa',
          at: 'Mon 27 Nov 11:54',
        },
      ]);
    }, 2000);
  }
};

module.exports = FirebaseDatabase;
