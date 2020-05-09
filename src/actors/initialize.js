import axios from 'axios';

export const initialize = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body1 = JSON.stringify({
    name: 'tennis',
    description:
      'Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each.',
  });
  const body2 = JSON.stringify({
    name: 'biking',
    description:
      'Biking, is the use of bicycles for transport, recreation, exercise or sport',
  });
  const body3 = JSON.stringify({
    name: 'gokart',
    description:
      'Kart racing or karting is a variant of motorsport road racing with open-wheel, four-wheeled vehicles known as go-karts or shifter karts.',
  });
  const body4 = JSON.stringify({
    name: 'dancing',
    description:
      'Dance is a performing art form consisting of purposefully selected sequences of human movement. ',
  });
  const body5 = JSON.stringify({
    name: 'workout',
    description:
      'A workout is a session in which physical exercises are performed',
  });
  const body6 = JSON.stringify({
    name: 'Test Name1',
    email: 'test1@test.com',
    password: '123456',
  });
  const body7 = JSON.stringify({
    name: 'Test Name2',
    email: 'test2@test.com',
    password: '123456',
  });
  const body8 = JSON.stringify({
    name: 'Test Name3',
    email: 'test3@test.com',
    password: '123456',
  });
  const body9 = JSON.stringify({
    name: 'Test Name4',
    email: 'test4@test.com',
    password: '123456',
  });
  const body10 = JSON.stringify({
    name: 'Test Name5',
    email: 'test5@test.com',
    password: '123456',
  });
  const body11 = JSON.stringify({
    name: 'Test Name6',
    email: 'test6@test.com',
    password: '123456',
  });
  const body12 = JSON.stringify({
    name: 'Test Name7',
    email: 'test7@test.com',
    password: '123456',
  });
  const body13 = JSON.stringify({
    name: 'Test Name8',
    email: 'test8@test.com',
    password: '123456',
  });
  const body14 = JSON.stringify({
    name: 'Test Name9',
    email: 'test9@test.com',
    password: '123456',
  });
  const body15 = JSON.stringify({
    name: 'Test Name10',
    email: 'test10@test.com',
    password: '123456',
  });
  const body16 = JSON.stringify({
    name: 'Test Name11',
    email: 'test11@test.com',
    password: '123456',
  });
  const body17 = JSON.stringify({
    name: 'Test Name12',
    email: 'test12@test.com',
    password: '123456',
  });
  const body18 = JSON.stringify({
    name: 'Test Name13',
    email: 'test13@test.com',
    password: '123456',
  });
  const body19 = JSON.stringify({
    name: 'Test Name14',
    email: 'test14@test.com',
    password: '123456',
  });
  const body20 = JSON.stringify({
    name: 'Test Name15',
    email: 'test15@test.com',
    password: '123456',
  });
  const body21 = JSON.stringify({
    name: 'Test Name16',
    email: 'test16@test.com',
    password: '123456',
  });
  const body22 = JSON.stringify({
    name: 'Test Name17',
    email: 'test17@test.com',
    password: '123456',
  });
  const body23 = JSON.stringify({
    name: 'Test Name18',
    email: 'test18@test.com',
    password: '123456',
  });
  const body24 = JSON.stringify({
    name: 'Test Name19',
    email: 'test19@test.com',
    password: '123456',
  });
  const body25 = JSON.stringify({
    name: 'Test Name20',
    email: 'test20@test.com',
    password: '123456',
  });
  const body26 = JSON.stringify({
    name: 'Test Name21',
    email: 'test21@test.com',
    password: '123456',
  });
  const body27 = JSON.stringify({
    name: 'Test party name1',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body28 = JSON.stringify({
    name: 'Test party name2',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });

  const body29 = JSON.stringify({
    name: 'Test party name3',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body30 = JSON.stringify({
    name: 'Test party name4',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body31 = JSON.stringify({
    name: 'Test party name5',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body32 = JSON.stringify({
    name: 'Test party name6',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body33 = JSON.stringify({
    name: 'Test party name7',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body34 = JSON.stringify({
    name: 'Test party name8',
    date: '2022-02-02',
    user_id: '7',
    activity_name: 'workout',
  });
  const body35 = JSON.stringify({
    name: 'Test party name9',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'workout',
  });
  const body36 = JSON.stringify({
    name: 'Test party name10',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'workout',
  });
  const body37 = JSON.stringify({
    name: 'Test party name11',
    date: '2022-02-02',
    user_id: '11',
    activity_name: 'workout',
  });
  const body38 = JSON.stringify({
    name: 'Test party name12',
    date: '2022-02-02',
    user_id: '15',
    activity_name: 'workout',
  });
  const body39 = JSON.stringify({
    name: 'Test party name13',
    date: '2022-02-02',
    user_id: '17',
    activity_name: 'workout',
  });
  const body40 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'workout',
  });
  const body41 = JSON.stringify({
    name: 'Test party name',
    date: '2022-02-02',
    user_id: '17',
    activity_name: 'tennis',
  });
  const body42 = JSON.stringify({
    name: 'Test party name',
    date: '2022-02-02',
    user_id: '19',
    activity_name: 'tennis',
  });
  const body43 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body44 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '3',
    activity_name: 'tennis',
  });
  const body45 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '1',
    activity_name: 'tennis',
  });
  const body46 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '2',
    activity_name: 'tennis',
  });
  const body47 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '4',
    activity_name: 'tennis',
  });
  const body48 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '5',
    activity_name: 'tennis',
  });
  const body49 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '6',
    activity_name: 'tennis',
  });
  const body50 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '7',
    activity_name: 'tennis',
  });
  const body51 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'tennis',
  });
  const body52 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'tennis',
  });
  const body53 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'tennis',
  });
  const body54 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '11',
    activity_name: 'tennis',
  });
  const body55 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '12',
    activity_name: 'tennis',
  });
  const body56 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body57 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '14',
    activity_name: 'tennis',
  });
  const body58 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '20',
    activity_name: 'tennis',
  });
  const body59 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body60 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body61 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body62 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body63 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body64 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body65 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body66 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body67 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body68 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'tennis',
  });
  const body69 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'biking',
  });
  const body70 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '1',
    activity_name: 'biking',
  });
  const body71 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '3',
    activity_name: 'biking',
  });
  const body72 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '4',
    activity_name: 'biking',
  });
  const body73 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '20',
    activity_name: 'biking',
  });
  const body74 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'biking',
  });
  const body75 = JSON.stringify({
    name: 'Te5st party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'biking',
  });
  const body76 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'biking',
  });
  const body77 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'biking',
  });
  const body78 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '7',
    activity_name: 'biking',
  });
  const body79 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'biking',
  });
  const body80 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'biking',
  });
  const body81 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '17',
    activity_name: 'biking',
  });
  const body82 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '18',
    activity_name: 'biking',
  });
  const body83 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '20',
    activity_name: 'biking',
  });
  const body84 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '5',
    activity_name: 'biking',
  });
  const body85 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '6',
    activity_name: 'biking',
  });
  const body86 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'biking',
  });
  const body87 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '7',
    activity_name: 'biking',
  });
  const body88 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '4',
    activity_name: 'biking',
  });
  const body89 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '3',
    activity_name: 'biking',
  });
  const body90 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '1',
    activity_name: 'biking',
  });
  const body91 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '1',
    activity_name: 'biking',
  });
  const body92 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '2',
    activity_name: 'biking',
  });
  const body93 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'biking',
  });
  const body94 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'gokart',
  });
  const body95 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '17',
    activity_name: 'gokart',
  });
  const body96 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '16',
    activity_name: 'gokart',
  });
  const body97 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '17',
    activity_name: 'gokart',
  });
  const body98 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '19',
    activity_name: 'gokart',
  });
  const body99 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '3',
    activity_name: 'gokart',
  });
  const body100 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'gokart',
  });
  const body101 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '7',
    activity_name: 'gokart',
  });
  const body102 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '3',
    activity_name: 'gokart',
  });
  const body103 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '6',
    activity_name: 'gokart',
  });
  const body104 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '4',
    activity_name: 'gokart',
  });
  const body105 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'gokart',
  });
  const body106 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'gokart',
  });
  const body107 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '7',
    activity_name: 'gokart',
  });
  const body108 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '6',
    activity_name: 'gokart',
  });
  const body109 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'gokart',
  });
  const body110 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'gokart',
  });
  const body111 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '17',
    activity_name: 'gokart',
  });
  const body112 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '19',
    activity_name: 'dancing',
  });
  const body113 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'dancing',
  });
  const body114 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'dancing',
  });
  const body115 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'dancing',
  });
  const body116 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '13',
    activity_name: 'dancing',
  });
  const body117 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'dancing',
  });
  const body118 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '14',
    activity_name: 'dancing',
  });
  const body119 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '11',
    activity_name: 'dancing',
  });
  const body120 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'dancing',
  });
  const body121 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'dancing',
  });
  const body122 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '11',
    activity_name: 'dancing',
  });
  const body123 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '3',
    activity_name: 'dancing',
  });
  const body124 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '14',
    activity_name: 'dancing',
  });
  const body125 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'dancing',
  });
  const body126 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '19',
    activity_name: 'dancing',
  });
  const body127 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'dancing',
  });
  const body128 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'dancing',
  });
  const body129 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'dancing',
  });
  const body130 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '20',
    activity_name: 'dancing',
  });
  const body131 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '4',
    activity_name: 'dancing',
  });
  const body132 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '6',
    activity_name: 'dancing',
  });
  const body133 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'dancing',
  });
  const body134 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'dancing',
  });
  const body135 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '11',
    activity_name: 'dancing',
  });
  const body136 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '14',
    activity_name: 'dancing',
  });
  const body137 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '18',
    activity_name: 'dancing',
  });
  const body138 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'dancing',
  });
  const body139 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '14',
    activity_name: 'dancing',
  });
  const body140 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '21',
    activity_name: 'dancing',
  });
  const body141 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '5',
    activity_name: 'dancing',
  });
  const body142 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '8',
    activity_name: 'biking',
  });
  const body143 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '9',
    activity_name: 'biking',
  });
  const body144 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '10',
    activity_name: 'biking',
  });
  const body145 = JSON.stringify({
    name: 'Test party name14',
    date: '2022-02-02',
    user_id: '11',
    activity_name: 'biking',
  });

  await axios.all([
    axios.post('/restapi/activity/initialize', body1, config),
    axios.post('/restapi/activity/initialize', body2, config),
    axios.post('/restapi/activity/initialize', body3, config),
    axios.post('/restapi/activity/initialize', body4, config),
    axios.post('/restapi/activity/initialize', body5, config),
    axios.post('/restapi/users', body6, config),
    axios.post('/restapi/users', body7, config),
    axios.post('/restapi/users', body8, config),
    axios.post('/restapi/users', body9, config),
    axios.post('/restapi/users', body10, config),
    axios.post('/restapi/users', body11, config),
    axios.post('/restapi/users', body12, config),
    axios.post('/restapi/users', body13, config),
    axios.post('/restapi/users', body14, config),
    axios.post('/restapi/users', body15, config),
    axios.post('/restapi/users', body16, config),
    axios.post('/restapi/users', body17, config),
    axios.post('/restapi/users', body18, config),
    axios.post('/restapi/users', body19, config),
    axios.post('/restapi/users', body20, config),
    axios.post('/restapi/users', body21, config),
    axios.post('/restapi/users', body22, config),
    axios.post('/restapi/users', body23, config),
    axios.post('/restapi/users', body24, config),
    axios.post('/restapi/users', body25, config),
    axios.post('/restapi/users', body26, config),
    axios.post('/restapi/parties/initialize', body27, config),
    axios.post('/restapi/parties/initialize', body28, config),
    axios.post('/restapi/parties/initialize', body29, config),
    axios.post('/restapi/parties/initialize', body30, config),
    axios.post('/restapi/parties/initialize', body31, config),
    axios.post('/restapi/parties/initialize', body32, config),
    axios.post('/restapi/parties/initialize', body33, config),
    axios.post('/restapi/parties/initialize', body34, config),
    axios.post('/restapi/parties/initialize', body35, config),
    axios.post('/restapi/parties/initialize', body36, config),
    axios.post('/restapi/parties/initialize', body37, config),
    axios.post('/restapi/parties/initialize', body38, config),
    axios.post('/restapi/parties/initialize', body39, config),
    axios.post('/restapi/parties/initialize', body40, config),
    axios.post('/restapi/parties/initialize', body41, config),
    axios.post('/restapi/parties/initialize', body42, config),
    axios.post('/restapi/parties/initialize', body43, config),
    axios.post('/restapi/parties/initialize', body44, config),
    axios.post('/restapi/parties/initialize', body45, config),
    axios.post('/restapi/parties/initialize', body46, config),
    axios.post('/restapi/parties/initialize', body47, config),
    axios.post('/restapi/parties/initialize', body48, config),
    axios.post('/restapi/parties/initialize', body49, config),
    axios.post('/restapi/parties/initialize', body50, config),
    axios.post('/restapi/parties/initialize', body51, config),
    axios.post('/restapi/parties/initialize', body52, config),
    axios.post('/restapi/parties/initialize', body53, config),
    axios.post('/restapi/parties/initialize', body54, config),
    axios.post('/restapi/parties/initialize', body55, config),
    axios.post('/restapi/parties/initialize', body56, config),
    axios.post('/restapi/parties/initialize', body57, config),
    axios.post('/restapi/parties/initialize', body58, config),
    axios.post('/restapi/parties/initialize', body59, config),
    axios.post('/restapi/parties/initialize', body60, config),
    axios.post('/restapi/parties/initialize', body61, config),
    axios.post('/restapi/parties/initialize', body62, config),
    axios.post('/restapi/parties/initialize', body63, config),
    axios.post('/restapi/parties/initialize', body64, config),
    axios.post('/restapi/parties/initialize', body65, config),
    axios.post('/restapi/parties/initialize', body66, config),
    axios.post('/restapi/parties/initialize', body67, config),
    axios.post('/restapi/parties/initialize', body68, config),
    axios.post('/restapi/parties/initialize', body69, config),
    axios.post('/restapi/parties/initialize', body70, config),
    axios.post('/restapi/parties/initialize', body71, config),
    axios.post('/restapi/parties/initialize', body72, config),
    axios.post('/restapi/parties/initialize', body73, config),
    axios.post('/restapi/parties/initialize', body74, config),
    axios.post('/restapi/parties/initialize', body75, config),
    axios.post('/restapi/parties/initialize', body76, config),
    axios.post('/restapi/parties/initialize', body77, config),
    axios.post('/restapi/parties/initialize', body78, config),
    axios.post('/restapi/parties/initialize', body79, config),
    axios.post('/restapi/parties/initialize', body80, config),
    axios.post('/restapi/parties/initialize', body81, config),
    axios.post('/restapi/parties/initialize', body82, config),
    axios.post('/restapi/parties/initialize', body83, config),
    axios.post('/restapi/parties/initialize', body84, config),
    axios.post('/restapi/parties/initialize', body85, config),
    axios.post('/restapi/parties/initialize', body86, config),
    axios.post('/restapi/parties/initialize', body87, config),
    axios.post('/restapi/parties/initialize', body88, config),
    axios.post('/restapi/parties/initialize', body89, config),
    axios.post('/restapi/parties/initialize', body90, config),
    axios.post('/restapi/parties/initialize', body91, config),
    axios.post('/restapi/parties/initialize', body92, config),
    axios.post('/restapi/parties/initialize', body93, config),
    axios.post('/restapi/parties/initialize', body94, config),
    axios.post('/restapi/parties/initialize', body95, config),
    axios.post('/restapi/parties/initialize', body96, config),
    axios.post('/restapi/parties/initialize', body97, config),
    axios.post('/restapi/parties/initialize', body98, config),
    axios.post('/restapi/parties/initialize', body99, config),
    axios.post('/restapi/parties/initialize', body100, config),
    axios.post('/restapi/parties/initialize', body101, config),
    axios.post('/restapi/parties/initialize', body102, config),
    axios.post('/restapi/parties/initialize', body103, config),
    axios.post('/restapi/parties/initialize', body104, config),
    axios.post('/restapi/parties/initialize', body105, config),
    axios.post('/restapi/parties/initialize', body106, config),
    axios.post('/restapi/parties/initialize', body107, config),
    axios.post('/restapi/parties/initialize', body108, config),
    axios.post('/restapi/parties/initialize', body109, config),
    axios.post('/restapi/parties/initialize', body110, config),
    axios.post('/restapi/parties/initialize', body111, config),
    axios.post('/restapi/parties/initialize', body112, config),
    axios.post('/restapi/parties/initialize', body113, config),
    axios.post('/restapi/parties/initialize', body114, config),
    axios.post('/restapi/parties/initialize', body115, config),
    axios.post('/restapi/parties/initialize', body116, config),
    axios.post('/restapi/parties/initialize', body117, config),
    axios.post('/restapi/parties/initialize', body118, config),
    axios.post('/restapi/parties/initialize', body119, config),
    axios.post('/restapi/parties/initialize', body120, config),
    axios.post('/restapi/parties/initialize', body121, config),
    axios.post('/restapi/parties/initialize', body122, config),
    axios.post('/restapi/parties/initialize', body123, config),
    axios.post('/restapi/parties/initialize', body124, config),
    axios.post('/restapi/parties/initialize', body125, config),
    axios.post('/restapi/parties/initialize', body126, config),
    axios.post('/restapi/parties/initialize', body127, config),
    axios.post('/restapi/parties/initialize', body128, config),
    axios.post('/restapi/parties/initialize', body129, config),
    axios.post('/restapi/parties/initialize', body130, config),
    axios.post('/restapi/parties/initialize', body131, config),
    axios.post('/restapi/parties/initialize', body132, config),
    axios.post('/restapi/parties/initialize', body133, config),
    axios.post('/restapi/parties/initialize', body134, config),
    axios.post('/restapi/parties/initialize', body135, config),
    axios.post('/restapi/parties/initialize', body136, config),
    axios.post('/restapi/parties/initialize', body137, config),
    axios.post('/restapi/parties/initialize', body138, config),
    axios.post('/restapi/parties/initialize', body139, config),
    axios.post('/restapi/parties/initialize', body140, config),
    axios.post('/restapi/parties/initialize', body141, config),
    axios.post('/restapi/parties/initialize', body142, config),
    axios.post('/restapi/parties/initialize', body143, config),
    axios.post('/restapi/parties/initialize', body144, config),
    axios.post('/restapi/parties/initialize', body145, config),
  ]);
};
