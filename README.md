# react-flexy-loader
most easy to use react loader

 ## install

 ```
 npm install react-flexy-loader
 ```

# live demo
https://react-flexy-loader.netlify.app/

# usage
import react-flexy-loader and add show props

```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"

const App = ()=>{
return <ReactFlexyLoader show />
}

export default App;
```

if you want to change alpha value just pass it
```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"

const App = ()=>{
return <ReactFlexyLoader show alpha={0.4} />
}
export default App;
```
If you have a spinner just pass it as a child. If you do that default spinner will be removed and new spinner replace it. 
For example if you want to use bootstrap spinner just pass it and spinner will be changed.


```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"
import { Spinner} from "react-bootstrap"

const App = ()=>{
return <ReactFlexyLoader show>
    <Spinner animation="grow" variant="primary" />
</ReactFlexyLoader>
}
export default App;
```
you can pass anything you want as a spinner. Child component will be centered on the div.

```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"
import { Spinner} from "react-bootstrap"

const App = ()=>{
return <ReactFlexyLoader show>
    <div>
    <h4>Loading...<h4>
    </div>
</ReactFlexyLoader>
}
export default App;
```


if you want to make behind the loader non clickable you can pass pointerEvents props false. like:

```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"

const App = ()=>{
return <ReactFlexyLoader show pointerEvents={false}/>
}
export default App;
```

You can also change the position of the spinner : "bottom,middle,top"

```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"

const App = ()=>{
return <ReactFlexyLoader show position="top"/>
}
export default App;
```

you can change the z-index value if you want

```js
import ReactFlexyLoader from "react-flexy-loader"
import "react-flexy-loader/dist/index.css"

const App = ()=>{
return <ReactFlexyLoader show zIndex={9999}/>
}
export default App;
```

#Props

|    property   |               type              | default  |               description               |
|:-------------:|:-------------------------------:|----------|:---------------------------------------:|
| show          | Boolean                         | false    | shows the loader                        |
| alpha         | Number                          | 0.3      | alpha value of rgba                     |
| zIndex        | Number                          | 99       | zIndex value of the loader              |
| pointerEvents | Boolean                         | true     | handle pointer events behind the loader |
| position      | String "middle", "top","bottom" | "middle" | handle the spinner position             |
