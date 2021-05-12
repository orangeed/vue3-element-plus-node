interface person {
    name: string;
    age: number;
    bust: number,
    size?: number,
    [propname: string]: any,
    say(): string
}

// 类的参数必须受到person接口的限制
class people implements person {
    name = 'orange'
    age = 18
    bust = 88
    say() {
        return 'hello'
    }
}

// 接口的继承
interface Teacher extends person {
    kecheng(): string
}

const boy = {
    name: 'orange',
    age: 25,
    bust: 90,
    size: 60,
    sex: '男',
    say() {
        return 'hello'
    },
    kecheng() {
        return '我教历史课'
    }
}

const getPreson = (boy: person) => {
    boy.age && boy.bust && console.log(boy.name + '合格');
    boy.age || boy.bust && console.log(boy.name + '不合格');
}

const logPerson = (boy: Teacher) => {
    console.log(`${boy.name}的年龄为${boy.age}，胸围为${boy.bust}`);
    boy.size && console.log(`${boy.name}的年龄为${boy.age}，胸围为${boy.bust}，尺寸为${boy.size}`);
    boy.sex && console.log(`${boy.name}的年龄为${boy.age}，胸围为${boy.bust}，尺寸为${boy.size}，性别为${boy.sex}`);
    boy.say && console.log(boy.say())
    boy.kecheng && console.log(boy.kecheng())
}

getPreson(boy)
logPerson(boy)

export { }